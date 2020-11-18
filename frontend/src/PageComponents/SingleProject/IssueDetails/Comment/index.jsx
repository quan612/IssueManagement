import React, { useRef, useState } from "react";
import { withCommentCreate } from "shared/HOC";

import { TextArea } from "shared/components/TextArea";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/styles";

import { FlexContainer, TextAreaContainer, BoxContainer, Box } from "./styles";

const IssueDetailsComments = ({ createComment, creatingComment, currentLogInUser }) => {
  const [isAddComment, setAddComment] = useState(false);
  const commentRef = useRef();

  const handleSaveComment = async () => {
    if (commentRef.current.value !== "") {
      await createComment(commentRef.current.value);
      setAddComment(false);
    } else return;
  };

  return (
    <div className="my-2">
      <FlexContainer>
        {isAddComment ? (
          <TextAreaContainer>
            <TextArea ref={commentRef} disabled={creatingComment} focus={true} height={"70px"} />
            <ButtonWrapper>
              <Button isWorking={creatingComment} variant="primary" onClick={handleSaveComment}>
                Save
              </Button>
              <Button disabled={creatingComment} variant="info" onClick={() => setAddComment(false)}>
                Cancel
              </Button>
            </ButtonWrapper>
          </TextAreaContainer>
        ) : (
          <BoxContainer>
            <Box onClick={() => setAddComment(true)}>Add comment...</Box>
          </BoxContainer>
        )}
      </FlexContainer>
    </div>
  );
};

export default withCommentCreate(IssueDetailsComments);
