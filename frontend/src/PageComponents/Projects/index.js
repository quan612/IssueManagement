import React, { useState } from "react";
import { withProjectsQuery } from "shared/HOC/withProjectsQuery";
import ProjectList from "./ProjectList";
import Toggle from "./Toggle";
import { ListContainer } from "./styles";
import ProjectListLoader from "shared/components/Loaders/ProjectListLoader";

const Projects = ({ loading, error, projects }) => {
  return (
    <ListContainer>
      {loading ? (
        <ProjectListLoader />
      ) : (
        <>
          <ProjectList projects={projects} />
          <Toggle />
        </>
      )}
    </ListContainer>
  );
};

export default withProjectsQuery(Projects);
