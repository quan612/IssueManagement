import React, { useRef, useState } from "react";
import { Wrapper, Title } from "./styles";
import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";
import { ErrorMessage } from "shared/components/ErrorMessage";

export const IssueDetailsTitle = ({ issue, updateIssue }) => {
  const [isEdit, setEdit] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef();

  const handleChange = (updateIssue) => {
    setError(null);
    const currentTitle = ref.current.value;

    if (currentTitle === "") {
      setError("Title is required");
    }

    if (currentTitle === issue.title) {
      setEdit(false);
    }

    if (currentTitle !== issue.title && currentTitle !== "") {
      updateIssue({ title: currentTitle });
      setEdit(false);
    }
  };

  return (
    <Wrapper>
      {!isEdit ? (
        <Title onClick={() => setEdit(true)}>{issue.title}</Title>
      ) : (
        <Input
          type="text"
          ref={ref}
          focus={true}
          defaultValue={issue.title}
          onChange={() => setError(null)}
          onBlur={() => handleChange(updateIssue)}
          onKeyDown={(event) => {
            if (
              event.keyCode === KeyCodes.ENTER ||
              event.keyCode === KeyCodes.ESCAPE
            ) {
              event.target.blur();
            }
          }}
          invalid={error}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
