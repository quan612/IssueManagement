const IssueOpen = "Open";
const IssueStatusChange = "Status";
const IssueAssigneeChange = "Assignee";
const IssueTypeChange = "Type";
const IssuePriorityChange = "Priority";
const IssueComment = "Comment";

const ProjectMutation = require("./ProjectMutation");
const UserMutation = require("./UserMutation");
const CommentMutation = require("./CommentMutation");
const FileMutation = require("./FileMutation");

const Mutation = {
  createProject: ProjectMutation.createProject,
  deleteProject: ProjectMutation.deleteProject,
  updateProject: ProjectMutation.updateProject,

  signup: UserMutation.signup,
  signin: UserMutation.signin,
  signout: UserMutation.signout,
  resetPassword: UserMutation.resetPassword,
  updateUserInfo: UserMutation.updateUserInfo,

  createComment: CommentMutation.createComment,
  updateComment: CommentMutation.updateComment,

  uploadFile: FileMutation.uploadFile,
};

exports.handleCreateLog = async (ctx, actionType, currentIssue, updateIssue) => {
  const createLogConditions = {
    logType: actionType,
    user: {
      connect: { id: ctx.request.userId }, //the user who does this action
    },
    issue: { connect: { id: updateIssue.id } },
  };

  switch (actionType) {
    case IssueStatusChange:
      return await ctx.prisma.createIssueTrackingLog({
        ...createLogConditions,
        previousValue: currentIssue.status,
        newValue: updateIssue.status,
      });
    case IssueAssigneeChange:
      return await ctx.prisma.createIssueTrackingLog({
        ...createLogConditions,
        prevAssignee:
          currentIssue.assignee !== null
            ? {
                connect: {
                  id: currentIssue.assignee.id,
                },
              }
            : null,
        newAssignee:
          updateIssue.assignee !== null
            ? {
                connect: {
                  id: updateIssue.assignee.id,
                },
              }
            : null,
      });

    case IssueTypeChange:
      return await ctx.prisma.createIssueTrackingLog({
        ...createLogConditions,
        previousValue: currentIssue.type,
        newValue: updateIssue.type,
      });

    case IssuePriorityChange:
      return await ctx.prisma.createIssueTrackingLog({
        ...createLogConditions,
        previousValue: currentIssue.priority,
        newValue: updateIssue.priority,
      });

    case IssueComment:
      return await ctx.prisma.createIssueTrackingLog({
        ...createLogConditions,
        previousValue: null,
        newValue: updateIssue.comment.id, //get id so that in front end we can query comment info
      });

    default:
      return null;
  }
};

module.exports = Mutation;
