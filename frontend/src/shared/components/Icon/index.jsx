import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ className, icon, size = "lg", color = "", onClick, ...props }) => {
  let _color = color || props.theme.colors.primary;

  return <FontAwesomeIcon className={className} icon={icon} size={size} color={_color} onClick={onClick} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

const ThemeIcon = withTheme(Icon);
export { ThemeIcon };
