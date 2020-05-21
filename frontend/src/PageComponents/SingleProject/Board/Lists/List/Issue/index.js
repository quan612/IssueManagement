import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

import UserAvartar from "shared/components/Avatar";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";

import { IssueContainer, IssueTitle, IssueDetails } from "./styles";

const BoardIssue = ({ issue, index }) => {
  const match = useRouteMatch();
  return (
    <Draggable draggableId={issue.id} index={index}>
      {(provided, snapshot) => (
        <Link to={`${match.url}/issues/${issue.id}`}>
          <IssueContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <IssueTitle className="issue-title overflow-hidden">
              {issue.title}
            </IssueTitle>
            <IssueDetails>
              <IssueTypeIcon type={issue.type} />
              <IssuePriorityIcon priority={issue.priority} />
              <div className="ml-auto ">
                {issue.assignee && (
                  <UserAvartar
                    user={issue.assignee}
                    src={issue.assignee.avatar}
                  />
                )}
              </div>
            </IssueDetails>
          </IssueContainer>
        </Link>
      )}
    </Draggable>
  );
};

export default BoardIssue;
