import React, { useState, useLayoutEffect } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/react-hooks";
import { useRouteMatch } from "react-router-dom";

import {
  PROJECT_ISSUES_QUERY,
  LOG_ISSUE_QUERY,
  SINGLE_ISSUE_QUERY,
  CREATE_ISSUE_MUTATION,
  UPDATE_ISSUE_MUTATION,
} from "shared/GraphQL/Issue";

export const withIssuesQuery = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { projectId } = match.params;
  const [issues, setIssues] = useState([]);
  const fetchVariables = { projectId: projectId };

  const { loading: fetching, data } = useQuery(PROJECT_ISSUES_QUERY, {
    variables: { projectId: projectId, filter: {} },
    onCompleted: (data) => {
      setIssues(data.issues);
    },
  });

  // handle query manually when user searches, or changing any filter
  const [fetchIssuesAPI, { loading: fetchingLazy }] = useLazyQuery(
    PROJECT_ISSUES_QUERY,
    {
      onCompleted: (data) => {
        setIssues(data.issues);
      },
    }
  );

  useLayoutEffect(() => {
    if (data && data.issues) setIssues(data.issues);
  }, [data]);

  return (
    <BaseComponent
      fetchingIssues={fetching || fetchingLazy}
      fetchIssuesAPI={(otherVariables) => {
        fetchIssuesAPI({
          variables: { ...fetchVariables, filter: otherVariables },
        });
      }}
      issues={issues}
      {...props}
    />
  );
};

export const withIssueLogsQuery = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { issueId } = match.params;

  const { data, loading, error } = useQuery(LOG_ISSUE_QUERY, {
    variables: { issueId },
  });

  return (
    <BaseComponent
      logsOnIssue={data ? data.logsOnIssue : []}
      fetchingLogs={loading}
      fetchingLogsError={error}
      {...props}
    />
  );
};

export const withSingleIssueQuery = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { issueId } = match.params;

  const { data, loading, error, networkStatus } = useQuery(SINGLE_ISSUE_QUERY, {
    variables: { id: issueId },
  });

  console.log("networkStatus", networkStatus);

  return (
    <BaseComponent
      issue={data ? data.issue : []}
      fetchingIssue={loading}
      fetchingIssueError={error}
      {...props}
    />
  );
};

export const withIssueCreate = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { projectId } = match.params;
  const [createIssue, { loading, error }] = useMutation(CREATE_ISSUE_MUTATION, {
    // need to update cache manually for this type of action
    update: (cache, { data: { createIssue } }) => {
      let data = cache.readQuery({
        query: PROJECT_ISSUES_QUERY,
        variables: { projectId: projectId, filter: {} },
      });

      cache.writeQuery({
        query: PROJECT_ISSUES_QUERY,
        data: {
          issues: [...data.issues, createIssue],
        },
        variables: { projectId: projectId, filter: {} },
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
