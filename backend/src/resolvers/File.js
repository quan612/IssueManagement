const File = {
  issue(parent, args, ctx, info) {
    return ctx.prisma.file({ id: parent.id }).issue();
  },
};

module.exports = File;
