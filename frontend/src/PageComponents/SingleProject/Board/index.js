import React, { useEffect } from "react";
import { withIssuesQuery, withIssueUpdate } from "shared/HOC";
import { flowRight } from "lodash";

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
    <div className="mt-2" style={{ flex: 1 }}>
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

export default flowRight(withIssueUpdate, withIssuesQuery)(Board);
