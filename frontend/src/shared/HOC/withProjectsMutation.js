import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_PROJECTS_QUERY } from "shared/HOC/GraphQL/Project";

const ADD_PROJECT_MUTATION = gql`
  mutation ADD_PROJECT_MUTATION($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      id
      name
    }
  }
`;

const UPDATE_PROJECT_MUTATION = gql`
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

export const withProjectsMutation = (Component) => ({ ...props }) => {
  const [
    createProject,
    { loading: creating, error: createError },
  ] = useMutation(ADD_PROJECT_MUTATION, {
    refetchQueries: [
      {
        query: ALL_PROJECTS_QUERY,
      },
    ],
  });

  const [
    updateProject,
    { loading: updating, error: updateError },
  ] = useMutation(UPDATE_PROJECT_MUTATION, {
    refetchQueries: [
      {
        query: ALL_PROJECTS_QUERY,
      },
    ],
  });

  const handleOnCreate = async (project) => {
    const res = await createProject({
      variables: { name: project.name, description: project.description },
    });

    // console.log("data", res);
  };

  const handleOnUpdate = async (id, project) => {
    const res = await updateProject({
      variables: {
        id: id,
        name: project.name,
        description: project.description,
      },
    });

    // console.log("data", res);
  };

  return (
    <Component
      {...props}
      loading={creating || updating || false}
      error={createError || updateError}
      onCreate={(project) => handleOnCreate(project)}
      onUpdate={(id, project) => handleOnUpdate(id, project)}
    />
  );
};

const DELETE_PROJECT_MUTATION = gql`
  mutation DELETE_PROJECT_MUTATION($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const withProjectDelete = (Component) => ({ ...props }) => {
  const [deleteProject, { loading, error }] = useMutation(
    DELETE_PROJECT_MUTATION,
    {
      refetchQueries: [
        {
          query: ALL_PROJECTS_QUERY,
        },
      ],
    }
  );
  const handleOnDelete = async (id) => {
    const res = await deleteProject({
      variables: { id: id },
    });
  };
  return (
    <Component
      {...props}
      onDelete={(id) => handleOnDelete(id)}
      loading={loading}
    />
  );
};
