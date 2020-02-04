const Mutation = {
  async createProject(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.prisma.createProject(
      {
        ...args
      },
      info
    );
    // console.log(item);
    return item;
  },

  async deleteProject(parent, args, ctx, info) {
    try {
      //find the project based on id
      console.log("testing", args.id);
      const project = await ctx.prisma.project({
        id: args.id
      });

      //todo: check if the user has permission

      //delete the item
      return ctx.prisma.deleteProject({
        id: args.id
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = Mutation;
