import React from "react";
import PropTypes from "prop-types";

import { IssueStatus } from "shared/constants/issues";
import { StyledTag } from "shared/components/styles";

const issueStatusColors = {
  BACKLOG: "#718096", // red
  OPEN: "#d69e2e", // pink
  INPROGRESS: "#3182ce", // orange
  DONE: "#38a169", // teal
};

const IssueStatusTag = ({ className, status }) => {
  const key = Object.keys(IssueStatus).find((key) => IssueStatus[key] === status);

  const color = issueStatusColors[key];
  return (
    <StyledTag className={className} color={color}>
      {status}
    </StyledTag>
  );
};

export { IssueStatusTag };
