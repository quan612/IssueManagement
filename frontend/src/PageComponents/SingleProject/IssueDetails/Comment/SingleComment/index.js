import React, { useState, useRef } from "react";
import { withCurrentUser, withCommentUpdate } from "shared/HOC";
import { flowRight } from "lodash";

import {
  Container,
  EditContainer,
  Content,
  DatesContainer,
  EditButton,
  CommentContainer,
  Comment,
} from "./styles";

import { TrackingUser } from "../../TrackingActivity";

import { TextArea } from "shared/components/TextArea";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/Button/styles";

import { parseDateAndTime } from "shared/utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleComment = ({
  comment,
  updateComment,
  loading: isWorking,
  error,
  commentOwner,
  currentLogInUser,
}) => {
  const [isEdit, setEdit] = useState(false);
  const commentRef = useRef();

  const handleSaveComment = async () => {
    if (commentRef.current.value !== comment.text) {
      await updateComment({
        variables: { id: comment.id, text: commentRef.current.value },

        optimisticResponse: {
          __typeName: "Mutation",
          updateComment: {
            __typeName: "Comment",
            id: comment.id,
            text: commentRef.current.value,
            updatedAt: new Date().toISOString(),
          },
        },
      });
    }
    setEdit(false);
  };

  return (
    <Container>
      <div className="flex items-center">
        <TrackingUser user={commentOwner} /> made a comment
        {currentLogInUser.id === commentOwner.id ? (
          <EditButton className="ml-auto">
            <FontAwesomeIcon icon="marker" onClick={() => setEdit(true)} />
          </EditButton>
        ) : null}
      </div>
      {isEdit ? (
        <EditContainer>
          <TextArea
            ref={commentRef}
            defaultValue={comment.text}
            disabled={isWorking}
            focus={true}
          />
          <ButtonWrapper>
            <Button
              isWorking={isWorking}
              variant="info"
              onClick={handleSaveComment}
            >
              Save
            </Button>

            <Button
              disabled={isWorking}
              variant="secondary"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </EditContainer>
      ) : (
        <Content>
          <CommentContainer>
            <Comment>{comment.text}</Comment>
          </CommentContainer>
          <DatesContainer>
            <span className="mr-2">
              Added on {parseDateAndTime(comment.createdAt)}
            </span>
            {comment.createdAt !== comment.updatedAt && comment.updatedAt && (
              <span>Modified on {parseDateAndTime(comment.updatedAt)}</span>
            )}
          </DatesContainer>
        </Content>
      )}
    </Container>
  );
};

export default flowRight(withCurrentUser, withCommentUpdate)(SingleComment);
