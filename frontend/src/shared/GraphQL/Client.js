import gql from "graphql-tag";

export const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    toasts @client
  }
`;

export const CREATE_TOAST_MUTATION = gql`
  mutation CREATE_TOAST_MUTATION($type: String, $message: String) {
    createToast(type: $type, message: $message) @client
  }
`;

export const DELETE_TOAST_MUTATION = gql`
  mutation DELETE_TOAST_MUTATION($id: Int!) {
    deleteToast(id: $id) @client
  }
`;
