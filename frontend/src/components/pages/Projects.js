import React, { Component } from "react";
import { useQuery } from "react-apollo";

import gql from "graphql-tag";
import styled from "styled-components";

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      id
      name
      description
    }
  }
`;

// client
//   .query({
//     query: ALL_PROJECTS_QUERY
//   })
//   .then(result => console.log(result));

const Projects = () => {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <>
      {/* <Query query={ALL_PROJECTS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <div> Loading...</div>;
          if (error) return <div>Error: {error}</div>;
          return <div>This is the projects page with data: {data}</div>;
        }}
      </Query> */}
    </>
  );
};

export default Projects;
