import React from "react";
import { useMutation } from "react-apollo";
import { useRouteMatch } from "react-router-dom";
import {
  PROJECT_ISSUES_QUERY,
  CREATE_ISSUE_MUTATION,
  UPDATE_ISSUE_MUTATION,
} from "./GraphQL/Issue";

export const withIssueCreate = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { projectId } = match.params;
  const [createIssue, { loading, error }] = useMutation(CREATE_ISSUE_MUTATION, {
    // need to update cache manually for this type of action
    update: (cache, { data: { createIssue } }) => {
      // Read the data from our cache for this query.
      let data = cache.readQuery({
        query: PROJECT_ISSUES_QUERY,
        variables: { projectId: projectId, filter: {} },
      });

      data.issues = data.issues.push(createIssue);

      cache.writeQuery({
        query: PROJECT_ISSUES_QUERY,
        data,
      });
    },
  });

  return (
    <BaseComponent
      {...props}
      creatingIssue={loading}
      creatingIssueError={error}
      createIssueAPI={createIssue}
    />
  );
};

export const withIssueUpdate = (BaseComponent) => ({ ...props }) => {
  const [updateIssue, { loading, error }] = useMutation(UPDATE_ISSUE_MUTATION);
  return (
    <BaseComponent
      {...props}
      updatingIssue={loading}
      errorUpdateIssue={error}
      updateIssueAPI={updateIssue}
    />
  );
};
