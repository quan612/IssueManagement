import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(id: $id) {
      id
      name
      description
    }
  }
`;

const withSingleProjectQuery = BaseComponent => ({ ...props }) => {
  const { params } = props.match;
  const { loading, error, data } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: { id: params.projectId }
  });

  if (loading) return <h1>Loading............</h1>;
  else {
    console.log(data.project);
    return <BaseComponent error={error} project={data.project} />;
  }
};

export default withSingleProjectQuery;
