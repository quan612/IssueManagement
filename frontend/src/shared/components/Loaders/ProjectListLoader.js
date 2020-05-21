import React from "react";
import { withTheme } from "styled-components";
import Spinner from "shared/components/Spinner";

const ProjectListLoader = (props) => {
  return <Spinner color={props.theme.colors.primary} size={50} />;
};

export default withTheme(ProjectListLoader);
