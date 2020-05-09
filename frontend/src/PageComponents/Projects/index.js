import React, { useRef } from "react";
import { withProjectsQuery } from "shared/HOC";
import { useInfiniteScroll } from "shared/hooks/useInfiniteScroll";

import ProjectList from "./ProjectList";
import Toggle from "./Toggle";
import ProjectListLoader from "shared/components/Loaders/ProjectListLoader";
import { ListContainer, LoadingContainer } from "./styles";

const Projects = ({ loading, error, projects, limit, fetchMore }) => {
  let bottomRef = useRef(null);
  useInfiniteScroll(bottomRef, fetchMore, projects.length, limit, loading);

  return (
    <ListContainer>
      <Toggle />
      <ProjectList projects={projects} />
      <LoadingContainer ref={bottomRef}>
        {loading && <ProjectListLoader />}
      </LoadingContainer>
    </ListContainer>
  );
};

export default withProjectsQuery(Projects);
