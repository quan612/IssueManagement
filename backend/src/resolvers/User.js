const User = {
  assigned(parent, args, ctx, info) {
    return ctx.prisma.user({ id: parent.id }).assigned();
  },
  reporter(parent, args, ctx, info) {
    return ctx.prisma.user({ id: parent.id }).reporter();
  }
};

module.exports = User;
