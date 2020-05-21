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
} from "./styles";

import { TrackingUser } from "../../TrackingActivity";

import { TextArea } from "shared/components/TextArea";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/styles";

import { toLocalDateTime } from "shared/utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleComment = ({
  comment,
  commentOwner,
  currentLogInUser,
  updateComment,
  loading: isWorking,
}) => {
  const [isEdit, setEdit] = useState(false);
  const commentRef = useRef();

  const handleSaveComment = async () => {
    if (commentRef.current.value !== comment.text) {
      updateComment(comment, commentRef.current.value);
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
          <CommentContainer>{comment.text}</CommentContainer>
          <DatesContainer>
            <span className="mr-2">
              Added on {toLocalDateTime(comment.createdAt)}
            </span>
            {comment.createdAt !== comment.updatedAt && comment.updatedAt && (
              <span>Modified on {toLocalDateTime(comment.updatedAt)}</span>
            )}
          </DatesContainer>
        </Content>
      )}
    </Container>
  );
};

export default flowRight(withCurrentUser, withCommentUpdate)(SingleComment);
