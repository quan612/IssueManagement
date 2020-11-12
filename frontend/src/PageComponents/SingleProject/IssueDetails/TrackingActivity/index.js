import React from "react";
import { withIssueLogsQuery } from "shared/HOC/Issue";

import UserAvatar from "shared/components/Avatar";
import { Section } from "shared/components/Section";
import { LogWrapper, LogItemWrapper } from "./styles";
import { DatesContainer, FlexItemsWrapper, IssueStatusStyleWithBorder } from "shared/components/styles";

import SingleComment from "../Comment/SingleComment";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import { IssueStatusDescription } from "shared/constants/issues";

import { toLocalDateTime } from "shared/utils/dateUtils";

const TrackingActivity = ({ issue, logsOnIssue = [], loading }) => {
  return (
    <Section title="Activity">
      <LogWrapper>
        {logsOnIssue.map((log) => {
          return <LogItemWrapper key={log.id}>{handleRenderTracking(log, issue)}</LogItemWrapper>;
        })}
      </LogWrapper>
    </Section>
  );
};

export default withIssueLogsQuery(TrackingActivity);

export const TrackingUser = ({ user }) => {
  if (!user) user = { name: "Unassigned", id: null, avatar: null };
  return <UserAvatar className="mr-1" user={user} src={user.avatar} />;
};

const handleRenderTracking = (log, issue) => {
  const { logType, user, prevAssignee, newAssignee, previousValue, newValue } = log;

  switch (logType) {
    case "IssueCreate":
      return (
        <FlexItemsWrapper>
          <TrackingUser user={user} />
          opened this issue
          <DatesContainer>{toLocalDateTime(log.logDate)}</DatesContainer>
        </FlexItemsWrapper>
      );

    case "IssuePriorityChange":
      return (
        <FlexItemsWrapper>
          <TrackingUser user={user} />
          changed&nbsp;<b>Priority</b>&nbsp;from {previousValue}&nbsp;
          <IssuePriorityIcon priority={previousValue} /> to {newValue}&nbsp;
          <IssuePriorityIcon priority={newValue} />
          <DatesContainer>{toLocalDateTime(log.logDate)}</DatesContainer>
        </FlexItemsWrapper>
      );

    case "IssueStatusChange":
      return (
        <FlexItemsWrapper>
          <TrackingUser user={user} />
          changed&nbsp;<b>Status</b>&nbsp;from <Status status={previousValue} /> to{" "}
          <Status status={newValue} />
          <DatesContainer>{toLocalDateTime(log.logDate)}</DatesContainer>
        </FlexItemsWrapper>
      );

    case "IssueAssigneeChange":
      return (
        <FlexItemsWrapper>
          <TrackingUser user={user} /> changed assignee from&nbsp;
          <TrackingUser user={prevAssignee} /> to&nbsp;
          <TrackingUser user={newAssignee} />
          <DatesContainer>{toLocalDateTime(log.logDate)}</DatesContainer>
        </FlexItemsWrapper>
      );

    case "IssueTypeChange":
      return (
        <FlexItemsWrapper>
          <TrackingUser user={user} /> changed type from {previousValue}&nbsp;
          <Type type={previousValue} />
          &nbsp;to&nbsp;
          {newValue}&nbsp;
          <Type type={newValue} />
        </FlexItemsWrapper>
      );

    case "IssueComment":
      return (
        <SingleComment
          commentOwner={user}
          comment={issue.comments.filter((comment) => comment.id === log.newValue)[0]}
        />
      );

    default:
      return null;
  }
};

const Status = ({ status }) => {
  return (
    <IssueStatusStyleWithBorder status={status}>
      <div>{IssueStatusDescription[status]}</div>
    </IssueStatusStyleWithBorder>
  );
};

const Type = ({ type }) => <IssueTypeIcon type={type} />;
