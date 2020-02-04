import React from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_PROJECTS_QUERY } from "./withProjectsQuery";

const ADD_PROJECT_MUTATION = gql`
  mutation ADD_PROJECT_MUTATION($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      id
      name
    }
  }
`;

const withProjectsMutation = Component => ({ ...props }) => {
  const [createProject, { loading, error }] = useMutation(
    ADD_PROJECT_MUTATION,
    {
      refetchQueries: [
        {
          query: ALL_PROJECTS_QUERY
        }
      ]
    }
  );

  const handleOnSubmit = async project => {
    const res = await createProject({
      variables: { name: project.name, description: project.description }
    });

    console.log("data", res);
  };

  return (
    <Component
      {...props}
      loading={loading}
      error={error}
      onSubmit={project => handleOnSubmit(project)}
    />
  );
};

export default withProjectsMutation;
