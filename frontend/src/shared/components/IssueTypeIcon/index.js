import React from "react";
import PropTypes from "prop-types";

import { IconContainer } from "shared/components/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IssueType } from "shared/constants/issues";

const typeIcon = {
  TASK: "check-square",
  BUG: "bug",
  STORY: "bookmark",
};

const typeColor = {
  TASK: "#4FADE6",
  BUG: "#E44D42",
  STORY: "#0B875B",
};

const IssueTypeIcon = ({ type }) => {
  const key = Object.keys(IssueType).find((key) => IssueType[key] === type);
  const icon = typeIcon[key];
  const color = typeColor[key];
  return (
    <IconContainer>
      <FontAwesomeIcon icon={icon} color={color} />
    </IconContainer>
  );
};

const propTypes = {
  type: PropTypes.string.isRequired,
};

IssueTypeIcon.propTypes = propTypes;

export default IssueTypeIcon;
