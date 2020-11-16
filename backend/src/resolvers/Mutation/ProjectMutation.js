const ProjectMutation = {
  async createProject(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("User must be logged in!");
    }

    return await ctx.prisma.createProject(
      {
        ...args,
      },
      info
    );
  },

  async deleteProject(parent, args, ctx, info) {
    try {
      //find the project based on id
      // console.log("testing", args.id);
      const project = await ctx.prisma.project({
        id: args.id,
      });

      //todo: check if the user has permission

      //delete the item
      return await ctx.prisma.deleteProject({
        id: args.id,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async updateProject(parent, args, ctx, info) {
    try {
      // console.log(args);
      return await ctx.prisma.updateProject(
        {
          data: {
            name: args.name,
            key: args.key,
          },
          where: {
            id: args.id,
          },
        },
        info
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = ProjectMutation;
