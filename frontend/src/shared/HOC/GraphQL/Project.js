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

export const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(id: $id) {
      id
      name
      description
    }
  }
`;
