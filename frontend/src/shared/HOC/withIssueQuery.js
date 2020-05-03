import React, { useState, useLayoutEffect } from "react";
import { useLazyQuery, useQuery } from "react-apollo";
import { useRouteMatch } from "react-router-dom";
import {
  PROJECT_ISSUES_QUERY,
  LOG_ISSUE_QUERY,
  SINGLE_ISSUE_QUERY,
} from "shared/HOC/GraphQL/Issue";

export const withIssuesQuery = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { projectId } = match.params;
  const [issues, setIssues] = useState([]);
  const fetchVariables = { projectId: projectId };

  const { loading: fetching, data, error: fetchError } = useQuery(
    PROJECT_ISSUES_QUERY,
    {
      variables: { projectId: projectId, filter: {} },
      onCompleted: (data) => {
        setIssues(data.issues);
      },
    }
  );

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

  const { data, loading, error } = useQuery(SINGLE_ISSUE_QUERY, {
    variables: { id: issueId },
  });

  return (
    <BaseComponent
      issue={data ? data.issue : []}
      fetchingIssue={loading}
      fetchingIssueError={error}
      {...props}
    />
  );
};
