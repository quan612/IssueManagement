const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

const IssueCreate = "IssueCreate";
const IssueStatusChange = "IssueStatusChange";
const IssueAssigneeChange = "IssueAssigneeChange";
const IssueTypeChange = "IssueTypeChange";
const IssuePriorityChange = "IssuePriorityChange";
const IssueComment = "IssueComment";

const Mutation = {
  async createProject(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("User must be logged in!");
    }

    return await ctx.prisma.createProject(
      {
        ...args,
      },
      info
    );
  },

  async deleteProject(parent, args, ctx, info) {
    try {
      //find the project based on id
      // console.log("testing", args.id);
      const project = await ctx.prisma.project({
        id: args.id,
      });

      //todo: check if the user has permission

      //delete the item
      return ctx.prisma.deleteProject({
        id: args.id,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async updateProject(parent, args, ctx, info) {
    try {
      // console.log(args);
      return await ctx.prisma.updateProject(
        {
          data: {
            name: args.name,
            description: args.description,
          },
          where: {
            id: args.id,
          },
        },
        info
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  async signup(parent, args, ctx, info) {
    // lowercase the email
    args.email = args.email.toLowerCase();

    // check if there is an email in the system
    const isExist = await ctx.prisma.user({
      email: args.email,
    });

    if (isExist) throw new Error(`This email ${args.email} was used.`);

    // hash user password
    const hashPassword = await bcrypt.hash(args.password, 10);

    // create the user with that hashed password
    const user = await ctx.prisma.createUser(
      {
        ...args,
        password: hashPassword,
        permissions: { set: ["USER"] },
      },
      info
    );

    // create a jwt for this user
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    //set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      // secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // cookie for 7 days
    });

    // return the user
    return user;
  },

  async signin(parent, args, ctx, info) {
    const { email, password } = args;

    // check if there is an email in the system
    const user = await ctx.prisma.user({
      email: email,
    });

    if (!user)
      throw new Error(
        `There is no user with this email in ur record: ${email}`
      );

    // check if the password is correct by comparing the its hashed password with the database
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Password entry doesn't match this user ");

    // generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the cookie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      // secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // cookie for 7 days
    });

    console.log("user sign in succeed");
    //return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "User is logged out!" };
  },

  async resetPassword(parent, args, ctx, info) {
    const { email, password, confirmPassword } = args;
    //check if pw and confirm pw match
    if (password !== confirmPassword)
      throw new Error("Password and Confirm password must match");

    //find the user
    const user = await ctx.prisma.user({
      email: email,
    });
    if (!user) throw new Error(`There is no user with email ${email}!`);

    // now user exists and password is good then we hashed this password
    const hashedPassword = await bcrypt.hash(password, 10); //10 is salt
    const updatedUser = await ctx.prisma.updateUser(
      {
        where: {
          email: email,
        },
        data: {
          password: hashedPassword,
        },
      },
      info
    );

    // // generate the json token
    // const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // //set the jwt as a cookie on the response

    // ctx.response.cookie("token", token, {
    //   httpOnly: true,
    //   // secure: false,
    //   maxAge: 1000 * 60 * 60 * 24 * 7 // cookie for 7 days
    // });

    // return the user
    return updatedUser;
  },

  async updateUserInfo(parent, args, ctx, info) {
    const { email, name, avatar } = args;

    //find the user
    const user = await ctx.prisma.user({
      email: email,
    });
    if (!user) throw new Error(`There is no user with email ${email}!`);

    let updateData = {};
    if (name) updateData = { ...updateData, name: name };
    if (avatar) updateData = { ...updateData, avatar: avatar };

    console.log("update data", updateData);

    const updatedUser = await ctx.prisma.updateUser(
      {
        where: {
          email: email,
        },
        data: updateData,
      },
      info
    );

    console.log("updatedUser", updatedUser);
    return updatedUser;
  },

  async createIssue(parent, args, ctx, info) {
    try {
      // const {title, description, }
      //check if user is log in
      //check if the project existed
      // const project = await ctx.prisma.project(id: args.)

      // create an issue within the project
      const {
        title,
        description,
        type,
        status,
        priority,
        project,
        assignee,
      } = args;

      // finding the highest position based on current issues
      let listPosition;
      const projectIssues = await ctx.prisma.issues({
        where: { project: { id: project } },
      });

      if (projectIssues.length > 0) {
        const issuesSameType = projectIssues.filter(
          (issue) => issue.type === type
        );
        const issueWithMaxPosition = issuesSameType.reduce(function(
          prev,
          curr
        ) {
          return prev.listPosition > curr.listPosition ? prev : curr;
        });
        listPosition = issueWithMaxPosition.listPosition + 1;
      } else listPosition = 1;

      const issue = await ctx.prisma.createIssue(
        {
          title,
          description,
          type,
          status,
          priority,
          reporter: { connect: { id: ctx.request.userId } }, //after connect is an object
          project: { connect: { id: project } },
          assignee: assignee
            ? {
                connect: {
                  id: assignee,
                },
              }
            : null,
          estimate: 0,
          timeSpent: 0,
          timeRemaining: 0,
          listPosition,
        },
        info
      );

      // update Log table
      const log = await ctx.prisma.createLog({
        logType: IssueCreate,
        user: {
          connect: { id: ctx.request.userId },
        },
        issue: { connect: { id: issue.id } },
        previousValue: null,
        newValue: null,
      });

      // console.log("log test", log);

      return issue;
    } catch (error) {
      console.log(error);
    }
  },

  async updateIssue(parent, args, ctx, info) {
    //check if user is log in
    //check if the project existed

    const {
      id,
      title,
      description,
      type,
      status,
      priority,
      estimate,
      timeSpent,
      listPosition,
      assignee,
      actionType,
    } = args;

    let currentIssue = await ctx.prisma.issue({ id }, info);
    let currentAssignee = await ctx.prisma.issue({ id }, info).assignee();
    currentIssue.assignee = currentAssignee;

    const issueFragment = {
      title,
      description,
      type,
      status,
      priority,
      estimate,
      timeSpent,
      listPosition,
    };

    let updateIssue;

    if (actionType === "IssueAssigneeChange") {
      let assigneeCondition = assignee
        ? {
            connect: {
              id: assignee,
            },
          }
        : { disconnect: true };

      updateIssue = await ctx.prisma.updateIssue(
        {
          where: { id },
          data: {
            ...issueFragment,
            assignee: assigneeCondition,
          },
        },
        info
      );
    } else {
      updateIssue = await ctx.prisma.updateIssue(
        {
          where: { id },
          data: {
            ...issueFragment,
          },
        },
        info
      );
    }

    //due to relation, assignee is not available in updateIssue, we must assign it for log
    updateIssue.assignee = await ctx.prisma.issue({ id }, info).assignee();

    // update Log table
    await handleCreateLog(ctx, actionType, currentIssue, updateIssue);

    return updateIssue;
  },

  async createComment(parent, args, ctx, info) {
    //check if user is log in
    //check if the project existed
    // const project = await ctx.prisma.project(id: args.)
    //check if current issue existed
    const { text, issue, actionType } = args;

    const comment = await ctx.prisma.createComment(
      {
        text: text,
        issue: {
          connect: {
            id: issue,
          },
        },
        owner: {
          connect: {
            id: ctx.request.userId,
          },
        },
      },
      info
    );

    const updateIssue = await ctx.prisma.issue({ id: issue }, info);
    updateIssue.comment = comment;

    let log = await handleCreateLog(ctx, actionType, updateIssue, updateIssue);

    console.log("log test in comment", log);

    return comment;
  },

  async updateComment(parent, args, ctx, info) {
    //check if user is log in
    //check if the project existed
    //check if current issue existed

    const updatedComment = await ctx.prisma.updateComment(
      {
        where: {
          id: args.id,
        },
        data: { text: args.text },
      },
      info
    );
    return updatedComment;
  },
};

const handleCreateLog = async (ctx, actionType, currentIssue, updateIssue) => {
  const createLogConditions = {
    logType: actionType,
    user: {
      connect: { id: ctx.request.userId }, //the user who does this action
    },
    issue: { connect: { id: updateIssue.id } },
  };

  switch (actionType) {
    case IssueStatusChange:
      return await ctx.prisma.createLog({
        ...createLogConditions,
        previousValue: currentIssue.status,
        newValue: updateIssue.status,
      });
    case IssueAssigneeChange:
      return await ctx.prisma.createLog({
        ...createLogConditions,
        prevAssignee:
          currentIssue.assignee !== null
            ? {
                connect: {
                  id: currentIssue.assignee.id,
                },
              }
            : null,
        newAssignee:
          updateIssue.assignee !== null
            ? {
                connect: {
                  id: updateIssue.assignee.id,
                },
              }
            : null,
      });

    case IssueTypeChange:
      return await ctx.prisma.createLog({
        ...createLogConditions,
        previousValue: currentIssue.type,
        newValue: updateIssue.type,
      });

    case IssuePriorityChange:
      return await ctx.prisma.createLog({
        ...createLogConditions,
        previousValue: currentIssue.priority,
        newValue: updateIssue.priority,
      });

    case IssueComment:
      return await ctx.prisma.createLog({
        ...createLogConditions,
        previousValue: null,
        newValue: updateIssue.comment.id, //get id so that in front end we can query comment info
      });

    default:
      return null;
  }
};

module.exports = Mutation;
