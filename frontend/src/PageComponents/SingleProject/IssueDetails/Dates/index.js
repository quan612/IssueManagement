import React from "react";
import { toLocalDate } from "shared/utils/dateUtils";
import { DatesContainer } from "shared/components/styles";

export const IssueDetailsDates = ({ issue }) => {
  return (
    <DatesContainer>
      <div>Created on {toLocalDate(issue.createdAt)}</div>
      <div>Last Update on {toLocalDate(issue.updatedAt)}</div>
    </DatesContainer>
  );
};
