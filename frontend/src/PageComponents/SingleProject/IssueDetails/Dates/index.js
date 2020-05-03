import React from "react";
import { parseDate } from "shared/utils/dateUtils";
import { DatesContainer } from "shared/components/styles";

export const IssueDetailsDates = ({ issue }) => {
  return (
    <DatesContainer>
      <div>Created on {parseDate(issue.createdAt)}</div>
      <div>Last Update on {parseDate(issue.updatedAt)}</div>
    </DatesContainer>
  );
};
