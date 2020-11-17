import React, { useEffect } from "react";
import styled from "styled-components";
import { withIssuesQuery, withIssueUpdate } from "shared/HOC";
import { flowRight } from "lodash";

import Filters from "./Filters";
import ListsManager from "./ListsManager";

import { Button } from "shared/components/Button";

import { BoardContainer } from "./styles";

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
    <BoardContainer>
      <div>
        <ButtonWrapper>
          <Button variant="primary-outline" onClick={openModal}>
            Create Issue
          </Button>
        </ButtonWrapper>
        {/* <Filters onFilter={handleOnFilter} users={users} /> */}
      </div>
      <ListsManager
        issues={issues}
        fetchingIssues={fetchingIssues}
        updatingIssue={updatingIssue}
        updateIssueAPI={updateIssueAPI}
      />
    </BoardContainer>
  );
};

export default flowRight(withIssueUpdate, withIssuesQuery)(Board);

const ButtonWrapper = styled.div`
  max-width: 350px;
`;
