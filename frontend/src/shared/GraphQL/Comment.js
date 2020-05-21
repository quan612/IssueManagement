import gql from "graphql-tag";

export const COMMENT_FRAGMENT = gql`
  fragment commentFragment on Comment {
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
`;

export const CREATE_COMMENT_MUTATION = gql`
  mutation CREATE_COMMENT_MUTATION(
    $text: String!
    $issue: ID!
    $actionType: String
  ) {
    createComment(text: $text, issue: $issue, actionType: $actionType) {
      ...commentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation UPDATE_COMMENT_MUTATION($id: ID!, $text: String) {
    updateComment(id: $id, text: $text) {
      ...commentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`;

export const SINGLE_COMMENT_QUERY = gql`
  query SINGLE_COMMENT_QUERY($id: ID!) {
    singleComment(id: $id) {
      ...commentFragment
    }
  }
  ${COMMENT_FRAGMENT}
`;
