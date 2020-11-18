import gql from "graphql-tag";

export const FILE_FRAGMENT = gql`
  fragment fileFragment on File {
    id
    filename
    mimetype
    encoding
    url
    issue {
      id
    }
    createdAt
    updatedAt
  }
`;
