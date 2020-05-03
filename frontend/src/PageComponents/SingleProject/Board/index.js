import React, { useEffect } from "react";
import { withIssuesQuery } from "shared/HOC/withIssueQuery";
import { withIssueUpdate } from "shared/HOC/withIssueMutation";

import Filters from "./Filters";
import Lists from "./Lists";

const Board = ({
  issues,
  fetchingIssues,
  fetchIssuesAPI,
  updatingIssue,
  updateIssueAPI,
  ...rest
}) => {
  const { users } = rest;
  const handleOnFilter = (filter) => {
    fetchIssuesAPI(filter);
  };

  useEffect(() => {}, [issues]);

  return (
    <div className="mt-2">
      <Filters onFilter={handleOnFilter} users={users} />
      <Lists
        issues={issues}
        fetchingIssues={fetchingIssues}
        updatingIssue={updatingIssue}
        updateIssueAPI={updateIssueAPI}
      />
    </div>
  );
};

export default withIssueUpdate(withIssuesQuery(Board));
