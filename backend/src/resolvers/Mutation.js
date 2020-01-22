const Mutation = {
  async createProject(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createProject(
      {
        data: {
          ...args
        }
      },
      info
    );

    console.log(item);

    return item;
  }
};

module.exports = Mutation;
