import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

const DELETE_PROJECT_MUTATION = gql`
  mutation DELETE_PROJECT_MUTATION($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const handleDeleteProject = (deleteProject, id) => {
  console.log(id);
  // eslint-disable-next-line no-restricted-globals
  if (confirm("Want to delete?"))
    deleteProject().catch(err => {
      alert(err);
    });
  //   console.log(id);
};

const DeleteProject = ({ id }) => {
  const [
    deleteProject,
    { loading, error }
  ] = useMutation(DELETE_PROJECT_MUTATION, { variables: { id: id } });

  return (
    <button
      onClick={() => handleDeleteProject(deleteProject, id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Delet{loading ? "ing..." : "e"}
    </button>
  );
};

export default DeleteProject;
