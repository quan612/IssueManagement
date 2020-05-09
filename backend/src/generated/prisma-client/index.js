"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "IssueType",
    embedded: false
  },
  {
    name: "IssueStatus",
    embedded: false
  },
  {
    name: "IssuePriority",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Issue",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "LogType",
    embedded: false
  },
  {
    name: "Log",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
