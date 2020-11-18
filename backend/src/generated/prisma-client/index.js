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
    name: "LogType",
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
    name: "File",
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
  endpoint: `https://jira-clone-prod-0c3ab460a2.herokuapp.com/task-management-prod/prod`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
