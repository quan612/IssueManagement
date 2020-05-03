const Project = {
  issues(parent, args, ctx, info) {
    return ctx.prisma.project({ id: parent.id }).issues();
  }
};

module.exports = Project;
