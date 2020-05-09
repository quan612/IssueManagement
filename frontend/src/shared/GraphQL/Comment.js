import gql from "graphql-tag";

export const CREATE_COMMENT_MUTATION = gql`
  mutation CREATE_COMMENT_MUTATION(
    $text: String!
    $issue: ID!
    $actionType: String
  ) {
    createComment(text: $text, issue: $issue, actionType: $actionType) {
      id
      text
      issue {
        id
        title
      }
      owner {
        name
        avatar
      }
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation UPDATE_COMMENT_MUTATION($id: ID!, $text: String) {
    updateComment(id: $id, text: $text) {
      id
      text
      issue {
        id
        title
      }
      owner {
        name
        avatar
      }
    }
  }
`;

export const SINGLE_COMMENT_QUERY = gql`
  query SINGLE_COMMENT_QUERY($id: ID!) {
    singleComment(id: $id) {
      id
      text
      issue {
        id
        title
      }
      owner {
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
