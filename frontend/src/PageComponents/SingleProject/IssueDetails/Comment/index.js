import React, { useRef, useState } from "react";
import { withCommentCreate } from "shared/HOC/Comment";

import { Section } from "shared/components/Section";
import { TextArea } from "shared/components/TextArea";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/Button/styles";
import UserAvartar from "shared/components/Avatar";

import { FlexContainer, TextAreaContainer, BoxContainer, Box } from "./styles";

const IssueDetailsComments = ({
  issue,
  loading,
  error,
  createComment,
  currentLogInUser,
}) => {
  const [isAddComment, setAddComment] = useState(false);
  const commentRef = useRef();

  const handleSaveComment = async () => {
    if (commentRef.current.value !== "") {
      await createComment({
        variables: {
          text: commentRef.current.value,
          issue: issue.id,
          createdAt: new Date(),
          actionType: "IssueComment",
        },
      });

      setAddComment(false);
    } else return;
  };

  return (
    <Section title="Comment">
      <FlexContainer>
        <UserAvartar user={currentLogInUser} src={currentLogInUser.avatar} />
        {isAddComment ? (
          <TextAreaContainer>
            <TextArea
              ref={commentRef}
              disabled={loading}
              focus={true}
              height={"70px"}
            />
            <ButtonWrapper>
              <Button
                isWorking={loading}
                variant="info"
                onClick={handleSaveComment}
              >
                Save
              </Button>
              <Button
                disabled={loading}
                variant="secondary"
                onClick={() => setAddComment(false)}
              >
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
    </Section>
  );
};

export default withCommentCreate(IssueDetailsComments);
