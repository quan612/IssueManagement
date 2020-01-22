import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:5555"
});

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      id
      name
      description
    }
  }
`;

client
  .query({
    query: ALL_PROJECTS_QUERY
  })
  .then(result => console.log(result));

const Projects = () => {
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
