import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useRouteMatch } from "react-router-dom";

import {
  CREATE_COMMENT_MUTATION,
  UPDATE_COMMENT_MUTATION,
  SINGLE_COMMENT_QUERY,
} from "../GraphQL/Comment";

import { LOG_ISSUE_QUERY } from "shared/GraphQL/Issue";
import { SINGLE_ISSUE_QUERY } from "shared/GraphQL/Issue";

export const withCommentCreate = (BaseComponent) => ({ ...props }) => {
  const match = useRouteMatch();
  const { issueId } = match.params;

  const [createComment, { loading }] = useMutation(CREATE_COMMENT_MUTATION, {
    refetchQueries: [{ query: LOG_ISSUE_QUERY, variables: { issueId } }],
    // need to update cache manually for this type of action
    update: (cache, { data: { createComment } }) => {
      const data = cache.readQuery({
        query: SINGLE_ISSUE_QUERY,
        variables: { id: issueId },
      });

      createComment.createdAt = new Date().toISOString();
      createComment.updatedAt = null;
      data.issue.comments = [...data.issue.comments, createComment];

      cache.writeQuery({
        query: SINGLE_ISSUE_QUERY,
        data,
      });
    },
  });

  const handleCreateComment = async (text) => {
    await createComment({
      variables: {
        text,
        issue: issueId,
        createdAt: new Date(),
        actionType: "IssueComment",
      },
    });
  };

  return (
    <BaseComponent
      {...props}
      creatingComment={loading}
      createComment={(text) => handleCreateComment(text)}
    />
  );
};

export const withCommentUpdate = (BaseComponent) => ({ ...props }) => {
  const [updateComment, { loading }] = useMutation(UPDATE_COMMENT_MUTATION);

  const handleUpdateComment = async (comment, text) => {
    await updateComment({
      variables: { id: comment.id, text },
      optimisticResponse: {
        __typeName: "Mutation",
        updateComment: {
          __typeName: "Comment",
          ...comment,
          text,
          updatedAt: new Date().toISOString(),
        },
      },
    });
  };

  return (
    <BaseComponent
      {...props}
      loading={loading}
      updateComment={(comment, text) => handleUpdateComment(comment, text)}
    />
  );
};

export const withSingleCommentQuery = (BaseComponent) => ({ ...props }) => {
  const { commentId } = props;
  const { data, loading, error } = useQuery(SINGLE_COMMENT_QUERY, {
    variables: { id: commentId },
  });

  return (
    <BaseComponent
      comment={data ? data.singleComment : []}
      fetchingComment={loading}
      fetchingCommentError={error}
      {...props}
    />
  );
};
