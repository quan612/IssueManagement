const ProjectMutation = require("./ProjectMutation");
const IssueMutation = require("./IssueMutation");
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

  createIssue: IssueMutation.createIssue,
  updateIssue: IssueMutation.updateIssue,

  createComment: CommentMutation.createComment,
  updateComment: CommentMutation.updateComment,

  uploadFile: FileMutation.uploadFile,
};

module.exports = Mutation;
