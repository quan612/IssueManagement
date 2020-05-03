import React, { useState } from "react";
import { withSingleProjectQuery } from "shared/HOC/withProjectsQuery";
import { withUsersQuery } from "shared/HOC/withUserQuery";

import { Route, useRouteMatch, useHistory } from "react-router-dom";
import Modal from "shared/components/Modal";
import Board from "./Board";
import CreateIssue from "./CreateIssue";
import IssueDetails from "./IssueDetails";
import { Button } from "shared/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Heading, BackIcon } from "./styles";

const Project = ({ project, users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Container>
      <BackIcon>
        <FontAwesomeIcon
          size={"lg"}
          icon="arrow-left"
          onClick={() => {
            history.push("/projects");
          }}
        />
      </BackIcon>

      <Heading>Project: {project.name}</Heading>

      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Create Issue
      </Button>

      <Board users={users} />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Create Issue"
          render={(modal) => (
            <CreateIssue closeModal={() => setModalOpen(false)} users={users} />
          )}
        />
      )}

      <Route
        path={`${match.path}/issues/:issueId`}
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
