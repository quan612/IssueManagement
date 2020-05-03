import React from "react";
import { useQuery } from "react-apollo";

import {
  ALL_PROJECTS_QUERY,
  SINGLE_PROJECT_QUERY,
} from "shared/HOC/GraphQL/Project";

export const withProjectsQuery = (BaseComponent) => ({ ...props }) => {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  return (
    <BaseComponent
      loading={loading}
      error={error}
      projects={data ? data.projects : []}
      {...props}
    />
  );
};

export const withSingleProjectQuery = (BaseComponent) => ({ ...props }) => {
  const { params } = props.match;
  const { loading, error, data } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: { id: params.projectId },
  });

  if (loading) return <p>Single project query</p>;
  else {
    return <BaseComponent error={error} project={data.project} {...props} />;
  }
};
