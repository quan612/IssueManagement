import React, { useState } from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";

import {
  SINGLE_PROJECT_QUERY,
  PROJECTS_QUERY,
  PROJECTS_COUNT,
  ADD_PROJECT_MUTATION,
  UPDATE_PROJECT_MUTATION,
  DELETE_PROJECT_MUTATION,
  PROJECTS,
} from "shared/GraphQL/Project";

import { FullScreenSpinnerContainer } from "./styles";
import Loading from "shared/components/Spinner";

export const withProjects = (BaseComponent) => ({ ...props }) => {
  const { loading, error, data, networkStatus } = useQuery(PROJECTS);

  return (
    <BaseComponent
      loading={loading || networkStatus === 3}
      error={error}
      projects={data && data.projects}
      {...props}
    />
  );
};

export const withProjectsQuery = (BaseComponent) => ({ ...props }) => {
  const [filter, setFilter] = useState("");
  const client = useApolloClient();

  const { loading, error, data: { getProjects } = {}, fetchMore, networkStatus } = useQuery(PROJECTS_QUERY, {
    variables: { filter },
    notifyOnNetworkStatusChange: true,
  });

  const { data: summary } = useQuery(PROJECTS_COUNT, { variables: { filter } });

  const handleFilter = async (value) => {
    setFilter(value);
    await client.query({
      query: PROJECTS_QUERY,
      variables: { filter: value },
    });
  };

  return (
    <BaseComponent
      limit={summary ? summary.projectsCount : 0}
      loading={loading || networkStatus === 3}
      error={error}
      projects={getProjects}
      onFilter={(value) => handleFilter(value)}
      fetchMore={(currentItems) => {
        if (
          loading ||
          networkStatus === 3 ||
          networkStatus === 4 ||
          (currentItems === summary && summary !== 0)
        ) {
          return;
        } else {
          fetchMore({
            variables: { filter, skip: currentItems },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return prev;
              }
              let newList = [...prev.getProjects, ...fetchMoreResult.getProjects];
              // in case adding a new item between fetching, need to have unique list
              newList = [...new Set(newList)];
              return Object.assign({}, prev, {
                getProjects: newList,
              });
            },
          });
        }
      }}
      {...props}
    />
  );
};

export const withSingleProjectQuery = (BaseComponent) => ({ ...props }) => {
  const { params } = props.match;

  const { loading, error, data } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: { id: params.projectId },
  });

  if (loading) {
    return (
      <FullScreenSpinnerContainer>
        <Loading />
        Fetching project information...
      </FullScreenSpinnerContainer>
    );
  } else {
    return <BaseComponent error={error} project={data.project} {...props} />;
  }
};

export const withProjectCreate = (Component) => ({ ...props }) => {
  const [createProject, { loading, error }] = useMutation(ADD_PROJECT_MUTATION, {
    //cache update
    update: (cache, { data: { createProject } }) => {
      let data = cache.readQuery({
        query: PROJECTS_QUERY,
      });

      cache.writeQuery({
        query: PROJECTS_QUERY,
        data: {
          getProjects: [...data.getProjects, createProject],
        },
      });

      data = cache.readQuery({
        query: PROJECTS_COUNT,
      });

      cache.writeQuery({
        query: PROJECTS_COUNT,
        data: {
          projectsCount: data.projectsCount + 1,
        },
      });
    },
  });

  const handleOnCreate = async ({ name, key }) => {
    return await createProject({
      variables: { name, key },
    });
  };

  return (
    <Component
      {...props}
      onCreating={loading}
      error={error}
      onCreate={(project) => handleOnCreate(project)}
    />
  );
};

export const withProjectUpdate = (Component) => ({ ...props }) => {
  const [updateProject, { loading, error }] = useMutation(UPDATE_PROJECT_MUTATION);

  const handleOnUpdate = async (id, { name, key }) => {
    return await updateProject({
      variables: {
        id,
        name,
        key,
      },
    });
  };

  return (
    <Component
      {...props}
      loading={loading}
      error={error}
      onUpdate={(id, project) => handleOnUpdate(id, project)}
    />
  );
};

export const withProjectDelete = (Component) => ({ ...props }) => {
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT_MUTATION, {
    //cache update
    update: (cache, { data: { deleteProject } }) => {
      let data = cache.readQuery({
        query: PROJECTS_QUERY,
      });

      cache.writeQuery({
        query: PROJECTS_QUERY,
        data: {
          getProjects: data.getProjects.filter((o) => o.id !== deleteProject.id),
        },
      });

      data = cache.readQuery({
        query: PROJECTS_COUNT,
      });

      cache.writeQuery({
        query: PROJECTS_COUNT,
        data: {
          projectsCount: data.projectsCount - 1,
        },
      });
    },
  });

  const handleOnDelete = async (id) => {
    return await deleteProject({
      variables: { id: id },
    });
  };

  return <Component {...props} onDelete={(id) => handleOnDelete(id)} loading={loading} />;
};
