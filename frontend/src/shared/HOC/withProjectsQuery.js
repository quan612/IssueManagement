import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

export const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      id
      name
      description
    }
  }
`;

const withProjectsQuery = BaseComponent => ({ ...props }) => {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);
  if (loading) return <h1>Loading</h1>;
  else return <BaseComponent error={error} projects={data.projects} />;
};

export default withProjectsQuery;
