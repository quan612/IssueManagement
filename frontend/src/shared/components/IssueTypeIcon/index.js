import React from "react";
import PropTypes from "prop-types";

import { IconContainer } from "shared/components/styles";
import { ThemeIcon } from "shared/components/Icon";
import { IssueType } from "shared/constants/issues";

const typeIcon = {
  TASK: "check-square",
  BUG: "bug",
  REQUEST: "bookmark",
};

const typeColor = {
  TASK: "#4FADE6",
  BUG: "#E44D42",
  REQUEST: "#0B875B",
};

const IssueTypeIcon = ({ type }) => {
  const key = Object.keys(IssueType).find((key) => IssueType[key] === type);
  const icon = typeIcon[key];
  const color = typeColor[key];
  return (
    <IconContainer>
      <ThemeIcon icon={icon} color={color} size="lg" />
    </IconContainer>
  );
};

const propTypes = {
  type: PropTypes.string.isRequired,
};

IssueTypeIcon.propTypes = propTypes;

export default IssueTypeIcon;
