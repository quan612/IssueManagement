const Comment = {
  owner(parent, args, ctx, info) {
    return ctx.prisma.comment({ id: parent.id }).owner();
  },
  issue(parent, args, ctx, info) {
    return ctx.prisma.comment({ id: parent.id }).issue();
  }
};

module.exports = Comment;
