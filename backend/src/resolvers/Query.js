const Query = {
  async projects(parent, args, ctx, info) {
    console.log("Getting projects");
    const projects = await ctx.db.query.projects();
    return projects;
  }
};

module.exports = Query;
