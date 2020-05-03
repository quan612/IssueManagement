import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { IssueStatusDescription } from "shared/constants/issues";
import Issue from "./Issue";

const BoardList = ({ status, issues }) => {
  const filteredIssuesWithStatus = getIssuesWithStatus(issues, status);
  const filteredIssuesWithPosition = getIssuesWithPosition(
    filteredIssuesWithStatus
  );

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          className="single-list flex flex-col rounded bg-gray-300 w-1/4 p-2 mx-1 "
          style={{ minHeight: "500px" }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="list-title text-gray-600 text-sm font-bold">
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
        </div>
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
