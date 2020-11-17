import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

import UserAvatar from "shared/components/Avatar";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import IssuePriorityIcon, { IssuePriorityBulletIcon } from "shared/components/IssuePriorityIcon";

import { IssueContainer, IssueTitle, IssueDetails } from "./styles";

const BoardIssue = ({ issue, index }) => {
  const match = useRouteMatch();
  return (
    <Draggable draggableId={issue.id} index={index}>
      {(provided, snapshot) => (
        <Link to={`${match.url}/issue/${issue.id}`}>
          <IssueContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <div className="flex items-center">
              <span>
                <IssuePriorityBulletIcon priority={issue.priority} />
              </span>
            </div>
            <span>
              <IssueTitle>{issue.title}</IssueTitle>
            </span>
            <IssueDetails>
              <IssueTypeIcon type={issue.type} />

              <div className="ml-auto ">
                {issue.assignee && <UserAvatar user={issue.assignee} src={issue.assignee.avatar} size={30} />}
              </div>
            </IssueDetails>
          </IssueContainer>
        </Link>
      )}
    </Draggable>
  );
};

export default BoardIssue;
