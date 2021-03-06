import React from "react";
import { withSingleIssueQuery, withCurrentUser, withIssueUpdate } from "shared/HOC";

import { flowRight } from "lodash";

import { LOG_ISSUE_QUERY } from "shared/GraphQL/Issue";

import { IssueDetailsType } from "./Type";
import { IssueDetailsTitle } from "./Title";
import { IssueDetailsDescription } from "./Description";
import IssueDetailsComment from "./Comment";
import { IssueDetailsStatus } from "./Status";
import { IssueDetailsAssignee } from "./Assignee";
import { IssueDetailsPriority } from "./Priority";
import { IssueDetailsEstimate } from "./Estimate";
import { IssueDetailsTracking } from "./Tracking";
import { UploadAttachments } from "./Attachments";

import TrackingActivity from "./TrackingActivity";
import { TrackingHeader } from "./TrackingActivity/TrackingHeader";

import { PanelContainer, FlexWrap, FlexColContainer, FlexRowContainer, Left, Right } from "./styles";

import ModelLoader from "shared/components/Loaders/ModalLoader";
import { BrowserView, MobileView } from "react-device-detect";

const IssueDetails = ({ currentLogInUser, users, issue, fetchingIssue, updatingIssue, updateIssueAPI }) => {
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
      refetchQueries: [{ query: LOG_ISSUE_QUERY, variables: { issueId: issue.id } }],
      optimisticResponse: {
        __typeName: "Mutation",
        updateIssue: {
          __typeName: "Issue",
          ...issue,
          ...updateFields,

          /** Custom handle cache update
           ** if there is assignee, we must support a typeName for apollo to update the object
           **/
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
    const { createdAt, reporter } = issue;
    return (
      <>
        <BrowserView>
          <div className="p-5 h-full">
            <FlexColContainer>
              <IssueDetailsTitle issue={issue} updateIssue={handleUpdate} />
              <PanelContainer>
                <TrackingHeader user={reporter} date={createdAt} isCreated={true} />
                <IssueDetailsDescription issue={issue} updateIssue={handleUpdate} isWorking={updatingIssue} />
                <FlexWrap>
                  <IssueDetailsType issue={issue} updateIssue={handleUpdate} />
                  <IssueDetailsStatus issue={issue} updateIssue={handleUpdate} />
                  <IssueDetailsAssignee issue={issue} updateIssue={handleUpdate} users={users} />

                  <IssueDetailsPriority issue={issue} updateIssue={handleUpdate} />
                  <IssueDetailsEstimate issue={issue} updateIssue={handleUpdate} />
                  <IssueDetailsTracking issue={issue} updateIssue={handleUpdate} />
                </FlexWrap>
              </PanelContainer>

              <UploadAttachments attachments={issue.attachments} />
              <TrackingActivity users={users} issue={issue} />
            </FlexColContainer>
          </div>
          <div className="detail-footer w-full sticky rounded bottom-0 right-0 p-1 z-100 px-6 bg-white shadow border-t-2">
            <IssueDetailsComment currentLogInUser={currentLogInUser} issue={issue} />
          </div>
        </BrowserView>
        {/* <MobileView>
          <FlexColContainer>
            <IssueDetailsTitle issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsType issue={issue} updateIssue={handleUpdate} /> */}
        {/* <IssueDetailsDescription issue={issue} updateIssue={handleUpdate} isWorking={updatingIssue} /> */}
        {/* <IssueDetailsStatus issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsAssignee issue={issue} updateIssue={handleUpdate} users={users} /> */}
        {/* <IssueDetailsReporter reporter={issue.reporter} /> */}
        {/* <IssueDetailsPriority issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsEstimate issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsTracking issue={issue} updateIssue={handleUpdate} />
            <IssueDetailsComment currentLogInUser={currentLogInUser} issue={issue} />
            <TrackingActivity users={users} issue={issue} />
          </FlexColContainer>
        </MobileView> */}
      </>
    );
  }
};

export default flowRight(withCurrentUser, withSingleIssueQuery, withIssueUpdate)(IssueDetails);
