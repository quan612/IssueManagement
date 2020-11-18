const IssueStatusChange = "Status";
const IssueAssigneeChange = "Assignee";
const IssueTypeChange = "Type";
const IssuePriorityChange = "Priority";
const IssueComment = "Comment";
const IssueEstimate = "Estimate";
const IssueAttachment = "Attachment";

module.exports.handleCreateLog = async (ctx, actionType, currentIssue, updateIssue) => {
  try {
    const createLogConditions = {
      type: actionType,
      user: {
        connect: { id: ctx.request.userId }, //the user who does this action
      },
      issue: { connect: { id: updateIssue.id } },
    };
    console.log(actionType);
    switch (actionType) {
      case IssueEstimate:
        let previousValue = currentIssue.estimate.toString();
        let newValue = updateIssue.estimate.toString();
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue,
          newValue,
        });

      case IssueStatusChange:
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue: currentIssue.status,
          newValue: updateIssue.status,
        });

      case IssueAssigneeChange:
        return await ctx.prisma.createLog({
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
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue: currentIssue.type,
          newValue: updateIssue.type,
        });

      case IssuePriorityChange:
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue: currentIssue.priority,
          newValue: updateIssue.priority,
        });

      case IssueComment:
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue: null,
          newValue: updateIssue.comment.id, //get id so that in front-end we can query comment info
        });

      case IssueAttachment:
        return await ctx.prisma.createLog({
          ...createLogConditions,
          previousValue: null,
          newValue: updateIssue.file.id, //get id so that in front-end we can query file info
        });

      default:
        return null;
    }
  } catch (error) {
    console.log(error);
  }
};
