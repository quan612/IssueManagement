import gql from "graphql-tag";

export const PROJECTS_QUERY = gql`
  query ProjectsPagination($skip: Int = 0, $first: Int = 10) {
    getProjects(skip: $skip, first: $first) {
      id
      name
      description
    }
    # meta: projectsConnection(where: $where) {
    #   aggregate {
    #     count
    #   }
    # }
    # data: projects(skip: $skip, first: $first) {
    #   id
    #   name
    #   description
    # }
  }
`;

export const PROJECTS_COUNT = gql`
  query PROJECTS_COUNT {
    projectsCount
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

export const ADD_PROJECT_MUTATION = gql`
  mutation ADD_PROJECT_MUTATION($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_PROJECT_MUTATION = gql`
  mutation UPDATE_PROJECT_MUTATION(
    $id: ID!
    $name: String!
    $description: String
  ) {
    updateProject(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_PROJECT_MUTATION = gql`
  mutation DELETE_PROJECT_MUTATION($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
