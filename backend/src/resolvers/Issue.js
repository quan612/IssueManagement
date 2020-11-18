// relation needed for prisma client
// https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client

const Issue = {
  reporter(parent, args, ctx, info) {
    return ctx.prisma.issue({ id: parent.id }).reporter();
  },

  project(parent, args, ctx, info) {
    return ctx.prisma.issue({ id: parent.id }).project();
  },

  assignee(parent, args, ctx, info) {
    return ctx.prisma.issue({ id: parent.id }).assignee();
  },

  comments(parent, args, ctx, info) {
    return ctx.prisma.issue({ id: parent.id }).comments();
  },

  attachments(parent, args, ctx, info) {
    return ctx.prisma.issue({ id: parent.id }).attachments();
  },
};

module.exports = Issue;
