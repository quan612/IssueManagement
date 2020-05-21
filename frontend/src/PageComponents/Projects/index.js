import React, { useRef } from "react";
import { withProjectsQuery } from "shared/HOC";
import { useInfiniteScroll } from "shared/hooks/useInfiniteScroll";

import { ListWrapper, LoadingContainer } from "./styles";
import Filter from "./Filter";
import AnimatedList from "./AnimatedList";
import Toggle from "./Form/Toggle";
import ProjectListLoader from "shared/components/Loaders/ProjectListLoader";

const Projects = ({
  loading,
  projects = [],
  limit = 0,
  fetchMore,
  onFilter,
}) => {
  const bottomRef = useRef(null);
  useInfiniteScroll(bottomRef, fetchMore, projects.length, limit, loading);

  return (
    <ListWrapper>
      <Filter onFilter={onFilter} />
      <Toggle />
      <AnimatedList projects={projects} />
      <LoadingContainer ref={bottomRef}>
        {loading && <ProjectListLoader />}
      </LoadingContainer>
    </ListWrapper>
  );
};

export default withProjectsQuery(Projects);
