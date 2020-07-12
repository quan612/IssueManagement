import React, { useEffect } from "react";
import styled from "styled-components";
import { withIssuesQuery, withIssueUpdate } from "shared/HOC";
import { flowRight } from "lodash";

import Filters from "./Filters";
import Lists from "./Lists";
import { UtilityWrapper } from "./styles";

import { Button } from "shared/components/Button";

const Board = ({
  issues,
  fetchingIssues,
  fetchIssuesAPI,
  updatingIssue,
  updateIssueAPI,
  openModal,
  ...rest
}) => {
  const { users } = rest;
  const handleOnFilter = (filter) => {
    fetchIssuesAPI(filter);
  };

  useEffect(() => {}, [issues]);

  return (
    <div className="mt-2" style={{ flex: 1 }}>
      <UtilityWrapper>
        <ButtonWrapper>
          <Button variant="primary-outline" onClick={openModal}>
            Create Issue
          </Button>
        </ButtonWrapper>
        <Filters onFilter={handleOnFilter} users={users} />
      </UtilityWrapper>
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

const ButtonWrapper = styled.div`
  max-width: 350px;
`;
