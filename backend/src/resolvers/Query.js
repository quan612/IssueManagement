const Query = {
  async projects(parent, args, ctx, info) {
    console.log("Getting projects");
    // const projects = await ctx.db.query.projects();
    const projects = await ctx.prisma.projects();
    return projects;
  },

  async project(parent, args, ctx, info) {
    console.log("Getting project");
    const project = await ctx.prisma.project(
      {
        ...args
      },
      info
    );
    return project;
  }
};

module.exports = Query;
