import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

import UserAvartar from "shared/components/Avatar";
import IssueTypeIcon from "shared/components/IssueTypeIcon";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";

const BoardIssue = ({ issue, index }) => {
  const match = useRouteMatch();
  return (
    <Draggable draggableId={issue.id} index={index}>
      {(provided, snapshot) => (
        <Link to={`${match.url}/issues/${issue.id}`}>
          <div
            className="issue rounded bg-white mt-2 p-2 border-b cursor-pointer hover:bg-gray-100"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <section className="issue-title overflow-hidden">
              <p>{issue.title}</p>
            </section>
            <div className="flex items-end mt-2">
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
            </div>
          </div>
        </Link>
      )}
    </Draggable>
  );
};

export default BoardIssue;