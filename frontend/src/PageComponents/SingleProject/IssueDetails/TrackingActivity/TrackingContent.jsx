import React from "react";
import SingleComment from "../Comment/SingleComment";
import IssuePriorityIcon, { IssuePriorityTag } from "shared/components/IssuePriorityIcon";
import { IssueStatusTag } from "shared/components/IssueStatus";
import IssueTypeIcon from "shared/components/IssueTypeIcon";

import { ThemeIcon } from "shared/components/Icon";
import { StyledTag } from "shared/components/styles";
import { BulletList } from "./styles";

export const TrackingContent = ({ log, issue }) => {
  const handleRenderContent = (log, issue) => {
    const { type, user, prevAssignee, newAssignee, previousValue, newValue } = log;

    if (type === "Priority")
      return (
        <>
          <IssuePriorityTag priority={previousValue} />
          <ThemeIcon className="ml-8 mr-8" icon="chevron-right" size="sm" />
          <IssuePriorityTag priority={newValue} />
        </>
      );

    if (type === "Status")
      return (
        <>
          <IssueStatusTag status={previousValue} />
          <ThemeIcon className="ml-8 mr-8" icon="chevron-right" size="sm" />
          <IssueStatusTag status={newValue} />
        </>
      );

    if (type === "Assignee") {
      let prevUser = prevAssignee?.name || "No assignee";
      let nextUser = newAssignee?.name || "No assignee";
      return (
        <>
          <StyledTag>{prevUser}</StyledTag>
          <ThemeIcon className="ml-8 mr-8" icon="chevron-right" size="sm" />
          <StyledTag>{nextUser}</StyledTag>
        </>
      );
    }

    if (type === "Type") {
      return (
        <>
          <Type type={previousValue} />
          <ThemeIcon className="ml-8 mr-8" icon="chevron-right" size="sm" />
          <Type type={newValue} />
        </>
      );
    }

    if (type === "Comment") {
      return (
        <SingleComment
          commentOwner={user}
          comment={issue.comments.filter((comment) => comment.id === log.newValue)[0]}
        />
      );
    }
  };

  return (
    <div className="flex flex-wrap mt-2 ml-4 pl-16 items-center">
      <ul>
        <BulletList>
          <div className="flex items-center ml-4 mr-4 h-8">{log.type}:</div>
        </BulletList>
      </ul>
      {handleRenderContent(log, issue)}
    </div>
  );
};

const Type = ({ type }) => {
  return (
    <div className="inline-flex items-center h-8">
      <IssueTypeIcon type={type} />
    </div>
  );
};
