import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { IssueStatusDescription } from "shared/constants/issues";
import Issue from "./Issue";
import { SingeListContainer } from "./styles";

const BoardList = ({ status, issues }) => {
  const filteredIssuesWithStatus = getIssuesWithStatus(issues, status);
  const filteredIssuesWithPosition = getIssuesWithPosition(
    filteredIssuesWithStatus
  );

  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <SingeListContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="list-title text-gray-600 font-bold">
            {IssueStatusDescription[status]}
          </div>

          <div
            className="issue-list h-100"
            data-testid={`board-list:${status}`}
          >
            {filteredIssuesWithPosition.map((issue, index) => {
              return <Issue key={issue.id} issue={issue} index={index} />;
            })}
            {provided.placeholder}
          </div>
        </SingeListContainer>
      )}
    </Droppable>
  );
};

const getIssuesWithStatus = (issues, status) => {
  return issues.filter((issue) => issue.status === status);
};

const getIssuesWithPosition = (issues) =>
  issues.sort((a, b) => a.listPosition - b.listPosition);

export default BoardList;
