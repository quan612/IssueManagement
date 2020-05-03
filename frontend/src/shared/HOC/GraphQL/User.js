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

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
      permissions
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
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

export const USERINFO_MUTATION = gql`
  mutation USERINFO_MUTATION($email: String!, $name: String!, $avatar: String) {
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
