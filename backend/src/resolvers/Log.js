const Log = {
  user(parent, args, ctx, info) {
    return ctx.prisma.log({ id: parent.id }).user();
  },

  prevAssignee(parent, args, ctx, info) {
    return ctx.prisma.log({ id: parent.id }).prevAssignee();
  },

  newAssignee(parent, args, ctx, info) {
    return ctx.prisma.log({ id: parent.id }).newAssignee();
  }
};

module.exports = Log;
