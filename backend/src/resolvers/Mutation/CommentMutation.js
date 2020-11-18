let util = require("./log.js");

const CommentMutation = {
  async createComment(parent, args, ctx, info) {
    // check if user is log in
    // check if the project existed
    // const project = await ctx.prisma.project(id: args.)
    // check if current issue existed
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

    await util.handleCreateLog(ctx, actionType, updateIssue, updateIssue);

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

module.exports = CommentMutation;
