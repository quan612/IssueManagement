const Query = {
  async projects(parent, args, ctx, info) {
    console.log("Getting projects");
    // const projects = await ctx.db.query.projects();
    const projects = await ctx.prisma.projects();
    return projects;
  }
};

module.exports = Query;
