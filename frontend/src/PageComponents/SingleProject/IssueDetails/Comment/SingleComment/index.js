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
  CommentUtility,
} from "./styles";

import { TextArea } from "shared/components/TextArea";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/styles";

import { toLocalDateTime } from "shared/utils/dateUtils";
import { ThemeIcon } from "shared/components/Icon";

const SingleComment = ({ comment, commentOwner, currentLogInUser, updateComment, loading: isWorking }) => {
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
      {isEdit ? (
        <EditContainer>
          <TextArea ref={commentRef} defaultValue={comment.text} disabled={isWorking} focus={true} />
          <ButtonWrapper>
            <Button isWorking={isWorking} variant="info" onClick={handleSaveComment}>
              Save
            </Button>

            <Button disabled={isWorking} variant="secondary" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </ButtonWrapper>
        </EditContainer>
      ) : (
        <Content>
          <CommentContainer>
            <Comment>{comment.text}</Comment>
            <CommentUtility>
              {currentLogInUser.id === commentOwner.id && (
                <EditButton className="ml-auto">
                  <ThemeIcon icon="marker" onClick={() => setEdit(true)} />
                </EditButton>
              )}
            </CommentUtility>
          </CommentContainer>
        </Content>
      )}
    </Container>
  );
};

export default flowRight(withCurrentUser, withCommentUpdate)(SingleComment);
