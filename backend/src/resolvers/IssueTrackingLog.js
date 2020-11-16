const IssueTrackingLog = {
  user(parent, args, ctx, info) {
    return ctx.prisma.issueTrackingLog({ id: parent.id }).user();
  },

  prevAssignee(parent, args, ctx, info) {
    return ctx.prisma.issueTrackingLog({ id: parent.id }).prevAssignee();
  },

  newAssignee(parent, args, ctx, info) {
    return ctx.prisma.issueTrackingLog({ id: parent.id }).newAssignee();
  },
};

module.exports = IssueTrackingLog;
