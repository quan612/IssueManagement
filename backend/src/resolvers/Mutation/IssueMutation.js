let util = require("./log.js");

const IssueOpen = "Open";

const IssueMutation = {
  async createIssue(parent, args, ctx, info) {
    try {
      //check if user is log in
      //check if the project existed

      const { title, description, type, status, priority, project, assignee } = args;

      const projectIssues = await ctx.prisma.issues({
        where: { project: { id: project } },
      });

      // finding the highest position based on current issues
      let listPosition;

      if (projectIssues.length > 0) {
        const issuesSameType = projectIssues.filter((issue) => issue.type === type);
        const issueWithMaxPosition = issuesSameType.reduce(function(prev, curr) {
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
          attachments: [],
          dueDate: null,
        },
        info
      );

      //update Log table
      let log = await ctx.prisma.createLog({
        type: IssueOpen,
        user: {
          connect: { id: ctx.request.userId },
        },
        issue: { connect: { id: issue.id } },
        previousValue: null,
        newValue: null,
      });

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

    if (actionType === "Assignee") {
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
    // console.log(currentIssue);
    // update Log table
    await util.handleCreateLog(ctx, actionType, currentIssue, updateIssue);

    return updateIssue;
  },
};

module.exports = IssueMutation;
