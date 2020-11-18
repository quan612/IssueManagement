import React, { useState } from "react";
import { Route, useRouteMatch, useHistory } from "react-router-dom";
import { withUsersQuery, withSingleProjectQuery } from "shared/HOC";

import Modal from "shared/components/Modal";
import Board from "./Board";
import CreateIssue from "./CreateIssue";
import IssueDetails from "./IssueDetails";

import { Container, Heading, BackIcon, ButtonWrapper } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project, users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Container>
      <Heading>Project: {project.name}</Heading>

      <Board users={users} openModal={() => setModalOpen(true)} />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Create Issue"
          render={(modal) => <CreateIssue closeModal={() => setModalOpen(false)} users={users} />}
          isConfirm={true}
        />
      )}

      <Route
        path={`${match.path}/issue/:issueId`}
        render={(routeProps) => (
          <Modal
            isOpen={true}
            onClose={() => history.push(match.url)}
            render={(modal) => (
              <IssueDetails
                closeModal={modal.close}
                // issueId={routeProps.match.params.issueId}
                users={users}
              />
            )}
          />
        )}
      />
    </Container>
  );
};

export default withSingleProjectQuery(withUsersQuery(Project));
