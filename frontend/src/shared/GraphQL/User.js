import gql from "graphql-tag";

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
      avatar
    }
  }
`;

export const CURRENT_USER_CACHE_QUERY = gql`
  query CURRENT_USER_CACHE_QUERY {
    me @client {
      id
      email
      name
      permissions
      avatar
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
      permissions
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
      permissions
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
      permissions
    }
  }
`;

export const EDIT_USER_MUTATION = gql`
  mutation EDIT_USER_MUTATION(
    $email: String!
    $name: String!
    $avatar: String
  ) {
    updateUserInfo(email: $email, name: $name, avatar: $avatar) {
      id
      email
      name
      permissions
      avatar
    }
  }
`;

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      email
      name
      permissions
      avatar
    }
  }
`;

export const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY {
    singleUser {
      id
      email
      name
      permissions
      avatar
    }
  }
`;
