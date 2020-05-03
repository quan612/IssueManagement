import React from "react";
import { useMutation } from "react-apollo";
import { currentUserLogIn } from "shared/HOC/withUserQuery";
import { withSingleIssueQuery } from "shared/HOC/withIssueQuery";

import { UPDATE_ISSUE_MUTATION } from "shared/HOC/GraphQL/Issue";
import { LOG_ISSUE_QUERY } from "shared/HOC/GraphQL/Issue";

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
  closeModal,
  users,
  issue,
  fetchingIssue,
  fetchingIssueError,
  currentLogInUser,
}) => {
  const [
    updateIssue,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_ISSUE_MUTATION);

  const handleUpdate = async (updateFields) => {
    const currentAssignee = issue.assignee ? issue.assignee.id : null;
    const res = await updateIssue({
      variables: { ...issue, assignee: currentAssignee, ...updateFields },
      refetchQueries: [
        { query: LOG_ISSUE_QUERY, variables: { issueId: issue.id } },
      ],
      optimisticResponse: {
        __typeName: "Mutation",
        updateIssue: {
          ...issue,
          assignee: issue.assignee ? issue.assignee : null,
          ...updateFields,
        },
      },
    });
    console.log("res", res);
  };

  if (fetchingIssue) return <ModelLoader />;
  if (issue) {
    return (
      <FlexColContainer>
        <IssueDetailsType issue={issue} updateIssue={handleUpdate} />
        {/* done */}
        <IssueDetailsTitle issue={issue} updateIssue={handleUpdate} />
        <FlexRowContainer>
          <Left>
            <IssueDetailsDescription
              issue={issue}
              updateIssue={handleUpdate}
              isWorking={updateLoading}
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
  //  else return null;
};

export default withSingleIssueQuery(currentUserLogIn(IssueDetails));
