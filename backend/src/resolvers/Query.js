const Query = {
  async projects(parent, args, ctx, info) {
    const projects = await ctx.prisma.projects();
    return projects;
  },

  async project(parent, args, ctx, info) {
    const project = await ctx.prisma.project(
      {
        ...args,
      },
      info
    );
    return project;
  },

  async me(parent, args, ctx, info) {
    //check if there is current user Id
    if (!ctx.request.userId) {
      return null;
    }

    const user = await ctx.prisma.user(
      {
        id: ctx.request.userId,
      },
      info
    );
    // console.log(user);
    return user;
  },

  async users(parent, args, ctx, info) {
    // check if the user has permission to query this
    // if (!ctx.request.userId) {
    //   throw new Error("User is not logged in!");
    // }

    // hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    // if yes then return list of user
    return await ctx.prisma.users({}, info);
  },

  async singleUser(parent, args, ctx, info) {
    return await ctx.prisma.user(
      {
        id: args.id,
      },
      info
    );
  },

  async issues(parent, args, ctx, info) {
    //check if there is current user Id
    // if (!ctx.request.userId) {
    //   return null;
    // }

    console.log("project issue query is run again");
    let extraConditions = [];

    if (args.filter && args.filter.title)
      extraConditions = [
        ...extraConditions,
        { title_contains: args.filter.title },
      ];

    if (args.filter && args.filter.assignee)
      extraConditions = [
        ...extraConditions,
        { assignee: args.filter.assignee },
      ];

    const issues = await ctx.prisma.issues(
      {
        where: {
          AND: [
            {
              project: { id: args.projectId },
            },
            {
              AND: extraConditions,
            },
          ],
        },
      },
      info
    );

    return issues;
  },

  async issue(parent, args, ctx, info) {
    //check if there is current user Id
    // if (!ctx.request.userId) {
    //   return null;
    // }

    const issue = await ctx.prisma.issue(
      {
        id: args.id,
      },
      info
    );

    return issue;
  },

  async logsOnIssue(parent, args, ctx, info) {
    const logsOnIssue = await ctx.prisma.logs(
      {
        where: {
          issue: { id: args.issueId },
        },
        orderBy: "logDate_DESC",
      },
      info
    );

    return logsOnIssue;
  },

  async singleComment(parent, args, ctx, info) {
    const comment = await ctx.prisma.comment(
      {
        id: args.id,
      },
      info
    );

    return comment;
  },
};

module.exports = Query;
