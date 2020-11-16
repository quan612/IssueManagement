import React from "react";
import PropTypes from "prop-types";

import { IssuePriority } from "shared/constants/issues";
import { IconContainer } from "shared/components/styles";
import { ThemeIcon } from "shared/components/Icon";
import { StyledTag } from "shared/components/styles";

const issuePriorityColors = {
  HIGHEST: "#f687b3", // red
  HIGH: "#e53e3e", // pink
  MEDIUM: "#ecc94b", // orange
  LOW: "#4fd1c5", // teal
  LOWEST: "#4299e1", // blue
};

const issuePriorityIcons = {
  HIGHEST: "long-arrow-alt-up",
  HIGH: "long-arrow-alt-up",
  MEDIUM: "long-arrow-alt-up",
  LOW: "long-arrow-alt-down",
  LOWEST: "long-arrow-alt-down",
};

const IssuePriorityIcon = ({ className, priority }) => {
  const key = Object.keys(IssuePriority).find((key) => IssuePriority[key] === priority);
  const icon = issuePriorityIcons[key];
  const color = issuePriorityColors[key];
  return (
    <IconContainer className={className}>
      <ThemeIcon icon={icon} color={color} size="lg" />
    </IconContainer>
  );
};

const IssuePriorityBulletIcon = ({ className, priority }) => {
  const key = Object.keys(IssuePriority).find((key) => IssuePriority[key] === priority);

  const color = issuePriorityColors[key];
  return (
    <IconContainer className={className}>
      <ThemeIcon icon="circle" color={color} size="xs" />
    </IconContainer>
  );
};

const IssuePriorityTag = ({ className, priority }) => {
  const key = Object.keys(IssuePriority).find((key) => IssuePriority[key] === priority);

  const color = issuePriorityColors[key];
  return (
    <StyledTag className={className} color={color}>
      {priority}
    </StyledTag>
  );
};

const propTypes = {
  priority: PropTypes.string.isRequired,
};

IssuePriorityIcon.propTypes = propTypes;

export default IssuePriorityIcon;
export { IssuePriorityBulletIcon, IssuePriorityTag };
