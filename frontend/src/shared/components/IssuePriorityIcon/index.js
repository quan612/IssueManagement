import React from "react";
import PropTypes from "prop-types";

import { IconContainer } from "shared/components/styles";
import { IssuePriority } from "shared/constants/issues";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const issuePriorityColors = {
  HIGHEST: "#CD1317", // red
  HIGH: "#E9494A", // orange
  MEDIUM: "#E97F33", // orange
  LOW: "#2D8738", // green
  LOWEST: "#57A55A", // green
};

const issuePriorityIcons = {
  HIGHEST: "long-arrow-alt-up",
  HIGH: "long-arrow-alt-up",
  MEDIUM: "long-arrow-alt-up",
  LOW: "long-arrow-alt-down",
  LOWEST: "long-arrow-alt-down",
};

const IssuePriorityIcon = ({ className, priority }) => {
  const key = Object.keys(IssuePriority).find(
    (key) => IssuePriority[key] === priority
  );
  const icon = issuePriorityIcons[key];
  const color = issuePriorityColors[key];
  return (
    <IconContainer className={className}>
      <FontAwesomeIcon icon={icon} color={color} />
    </IconContainer>
  );
};

const propTypes = {
  priority: PropTypes.string.isRequired,
};

IssuePriorityIcon.propTypes = propTypes;

export default IssuePriorityIcon;
