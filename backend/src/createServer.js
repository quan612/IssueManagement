const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const Issue = require("./resolvers/Issue");
const Project = require("./resolvers/Project");
const User = require("./resolvers/User");
const Comment = require("./resolvers/Comment");
const Log = require("./resolvers/Log");

// create the GraphQL yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation: Mutation,
      Query: Query,
      Issue: Issue,
      Project: Project,
      User: User,
      Comment: Comment,
      Log: Log
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, prisma })
  });
}

module.exports = createServer;
