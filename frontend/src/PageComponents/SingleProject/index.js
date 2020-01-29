import React from "react";
import withSingleProjectQuery from "../../shared/HOC/withSingleProjectQuery";

const Project = ({ error, project }) => {
  return <p>{project.description}</p>;
};

export default withSingleProjectQuery(Project);
