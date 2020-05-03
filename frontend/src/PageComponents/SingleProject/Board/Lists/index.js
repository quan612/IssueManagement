import React from "react";

import { DragDropContext } from "react-beautiful-dnd";
import { IssueStatus } from "shared/constants/issues";
import List from "./List";

import IssuesLoader from "shared/components/Loaders/IssuesLoader";

const BoardLists = ({
  issues,
  fetchingIssues,
  updatingIssue,
  updateIssueAPI,
  ...rest
}) => {
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    // dropped to somewhere undefined
    if (!destination) return;

    // if we dropped into the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // dropped to a valid position then need to find the list position for this item

    const currentIssue = issues.find((issue) => issue.id === draggableId);

    let listPosition, prevIssue, nextIssue;

    // get the array of issues that sorted based on dropped destination
    const sortedIssues = getSortedListIssues(issues, destination.droppableId);
    const issuesAfterDrop = [...sortedIssues];

    // before finding prevIssue and nextIssue we need to make a temporary array that represent the position after dropping
    // this is to solve the issue when an item at the end moves up

    // moving within list
    if (destination.droppableId === source.droppableId) {
      issuesAfterDrop.splice(source.index, 1);
      issuesAfterDrop.splice(destination.index, 0, currentIssue);
    }
    // moving to another list
    else {
      issuesAfterDrop.splice(destination.index, 0, currentIssue);
    }

    const currentIndex = issuesAfterDrop.indexOf(currentIssue);

    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    prevIssue = issuesAfterDrop.find((issue, index) => index === prevIndex);
    nextIssue = issuesAfterDrop.find((issue, index) => index === nextIndex);

    if (!prevIssue && !nextIssue) {
      listPosition = 1;
    } else if (!prevIssue) {
      listPosition = nextIssue.listPosition - 1;
    } else if (!nextIssue) {
      listPosition = prevIssue.listPosition + 1;
    } else if (prevIssue && nextIssue) {
      listPosition = (prevIssue.listPosition + nextIssue.listPosition) / 2;
    }

    const res = await updateIssueAPI({
      variables: {
        ...currentIssue,
        listPosition: listPosition,
        status: destination.droppableId,
        actionType: "IssueStatusChange",
      },

      optimisticResponse: {
        __typeName: "Mutation",
        updateIssue: {
          ...currentIssue,
          listPosition: listPosition,
          status: destination.droppableId,
        },
      },
    });

    // console.log("res", res);
    // handle notifications when issue is updated successfully
  };

  if (fetchingIssues) return <IssuesLoader />;

  if (issues) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="styled-list w-full my-5">
          <div className="flex pr-5 items-start ">
            {Object.values(IssueStatus).map((status) => {
              return <List key={status} status={status} issues={issues} />;
            })}
          </div>
        </div>
      </DragDropContext>
    );
  }
};

const getSortedListIssues = (issues, status) =>
  issues
    .filter((issue) => issue.status === status)
    .sort((a, b) => a.listPosition - b.listPosition);

export default BoardLists;
