import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { IssueStatusDescription } from "shared/constants/issues";
import Issue from "../Issue";
import { ListContainer, ListTitle, ListSubTitle } from "./styles";

const BoardList = ({ status, issues }) => {
  const filteredIssuesWithStatus = getIssuesWithStatus(issues, status);
  const filteredIssuesWithPosition = getIssuesWithPosition(filteredIssuesWithStatus);

  const totalCards = filteredIssuesWithStatus.length;

  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
          data-testid={`board-list:${status}`}
        >
          <ListTitle>{IssueStatusDescription[status]}</ListTitle>
          <ListSubTitle>{totalCards} cards</ListSubTitle>
          {filteredIssuesWithPosition.map((issue, index) => {
            return <Issue key={issue.id} issue={issue} index={index} />;
          })}
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

const getIssuesWithStatus = (issues, status) => {
  return issues.filter((issue) => issue.status === status);
};

const getIssuesWithPosition = (issues) => issues.sort((a, b) => a.listPosition - b.listPosition);

export default BoardList;
