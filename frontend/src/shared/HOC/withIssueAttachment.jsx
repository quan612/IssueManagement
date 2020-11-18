import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import gql from "graphql-tag";
import { LOG_ISSUE_QUERY } from "shared/GraphQL/Issue";
import { SINGLE_ISSUE_QUERY } from "shared/GraphQL/Issue";

export const FILE_UPLOAD_MUTATION = gql`
  mutation FILE_UPLOAD_MUTATION($file: Upload!, $issue: ID!, $actionType: String) {
    uploadFile(file: $file, issue: $issue, actionType: $actionType) {
      id
      filename
      mimetype
      encoding
      url
    }
  }
`;

export const withIssueAttachment = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { issueId } = match.params;

  const [uploadFile, { loading, error }] = useMutation(FILE_UPLOAD_MUTATION, {
    context: { hasUpload: true },
    refetchQueries: [
      { query: LOG_ISSUE_QUERY, variables: { issueId } },
      {
        query: SINGLE_ISSUE_QUERY,
        variables: { id: issueId },
      },
    ],
  });

  const handleUploadFile = async (file) => {
    let res = await uploadFile({
      variables: { file, issue: issueId, actionType: "Attachment" },
    }).catch((err) => console.log(err));
    return res;
  };

  return (
    <BaseComponent loading={loading} error={error} {...props} uploadFile={(file) => handleUploadFile(file)} />
  );
};
