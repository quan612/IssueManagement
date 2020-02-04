import React from "react";
import withProjectsQuery from "../../shared/HOC/withProjectsQuery";
import ListAnimation from "./list-animation";
import ToggleProjectForm from "./AddProjectForm";

const Projects = ({ error, projects }) => {
  return (
    <>
      <div className="flex flex-col mb-4 items-center">
        <ListAnimation projects={projects} />
        <ToggleProjectForm />
      </div>
    </>
  );
};

export default withProjectsQuery(Projects);
