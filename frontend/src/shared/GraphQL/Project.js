import gql from "graphql-tag";

const PROJECT_FRAGMENT = gql`
  fragment projectFragment on Project {
    id
    name
    key
  }
`;

export const PROJECTS_QUERY = gql`
  query ProjectsPagination($filter: String = "", $skip: Int = 0, $first: Int = 10) {
    getProjects(filter: $filter, skip: $skip, first: $first) {
      ...projectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const PROJECTS = gql`
  query Projects {
    projects {
      ...projectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const PROJECTS_COUNT = gql`
  query PROJECTS_COUNT($filter: String = "") {
    projectsCount(filter: $filter)
  }
`;

export const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    project(id: $id) {
      ...projectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const ADD_PROJECT_MUTATION = gql`
  mutation ADD_PROJECT_MUTATION($name: String!, $key: String!) {
    createProject(name: $name, key: $key) {
      ...projectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const UPDATE_PROJECT_MUTATION = gql`
  mutation UPDATE_PROJECT_MUTATION($id: ID!, $name: String!, $key: String!) {
    updateProject(id: $id, name: $name, key: $key) {
      ...projectFragment
    }
  }
  ${PROJECT_FRAGMENT}
`;

export const DELETE_PROJECT_MUTATION = gql`
  mutation DELETE_PROJECT_MUTATION($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
