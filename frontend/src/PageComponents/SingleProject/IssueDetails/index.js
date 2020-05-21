import React from "react";

import {
  withSingleIssueQuery,
  withCurrentUser,
  withIssueUpdate,
} from "shared/HOC";

import { flowRight } from "lodash";

import { LOG_ISSUE_QUERY } from "shared/GraphQL/Issue";

import { IssueDetailsType } from "./Type";
import { IssueDetailsTitle } from "./Title";
import { IssueDetailsDescription } from "./Description";
import IssueDetailsComment from "./Comment";
import { IssueDetailsStatus } from "./Status";
import { IssueDetailsAssignee } from "./Assignee";
import { IssueDetailsReporter } from "./Reporter";
import { IssueDetailsPriority } from "./Priority";
import { IssueDetailsEstimate } from "./Estimate";
import { IssueDetailsTracking } from "./Tracking";
import { IssueDetailsDates } from "./Dates";
import TrackingActivity from "./TrackingActivity";

import { FlexColContainer, FlexRowContainer, Left, Right } from "./styles";

import ModelLoader from "shared/components/Loaders/ModalLoader";

const IssueDetails = ({
  currentLogInUser,
  users,
  issue,
  fetchingIssue,
  updatingIssue,
  updateIssueAPI,
}) => {
  const handleUpdate = async (updateFields) => {
    let assigneeId =
      updateFields.actionType === "IssueAssigneeChange"
        ? updateFields.assignee
        : issue.assignee
        ? issue.assignee.id
        : null;

    await updateIssueAPI({
      variables: {
        ...issue,
        ...updateFields,
        assignee: assigneeId,
      },
      refetchQueries: [
        { query: LOG_ISSUE_QUERY, variables: { issueId: issue.id } },
      ],
      optimisticResponse: {
        __typeName: "Mutation",
        updateIssue: {
          __typeName: "Issue",
          ...issue,
          ...updateFields,

          /** Custom handle cache update
           * if there is assignee, we must support a typeName for apollo to update the object
           */
          assignee: assigneeId
            ? {
                id: assigneeId,
                __typename: "User",
              }
            : null,
        },
      },
    });
  };

  if (fetchingIssue) return <ModelLoader />;

  if (issue) {
    return (
      <FlexColContainer>
        <IssueDetailsType issue={issue} updateIssue={handleUpdate} />

        <IssueDetailsTitle issue={issue} updateIssue={handleUpdate} />
        <FlexRowContainer>
          <Left>
            <IssueDetailsDescription
              issue={issue}
              updateIssue={handleUpdate}
              isWorking={updatingIssue}
            />
            <IssueDetailsComment
              currentLogInUser={currentLogInUser}
              issue={issue}
            />
            <TrackingActivity users={users} issue={issue} />
          </Left>
          <Right>
            <IssueDetailsStatus issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsAssignee
              issue={issue}
              updateIssue={handleUpdate}
              users={users}
            />
            <IssueDetailsReporter reporter={issue.reporter} />
            <IssueDetailsPriority issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsEstimate issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsTracking issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsDates issue={issue} />
          </Right>
        </FlexRowContainer>
      </FlexColContainer>
    );
  }
};

export default flowRight(
  withCurrentUser,
  withSingleIssueQuery,
  withIssueUpdate
)(IssueDetails);
