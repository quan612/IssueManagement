import React, { useRef, useState } from "react";
import { Wrapper, Title, Editable } from "./styles";

import { KeyCodes } from "shared/constants/keyCodes";
import { ErrorMessage } from "shared/components/ErrorMessage";

export const IssueDetailsTitle = ({ issue, updateIssue }) => {
  const [error, setError] = useState(null);
  const ref = useRef();

  const handleChange = async (updateIssue) => {
    setError(null);
    const currentTitle = ref.current.value;

    if (currentTitle === "") {
      setError("Title is required");
    }

    if (currentTitle === issue.title) {
      return;
    }

    if (currentTitle !== issue.title && currentTitle !== "") {
      updateIssue({ title: currentTitle }).catch((err) => console.log(err));
    }
  };

  return (
    <Wrapper>
      <Title>
        <Editable
          placeholder="Summary"
          type="text"
          ref={ref}
          focus={true}
          defaultValue={issue.title}
          onChange={() => setError(null)}
          onBlur={() => handleChange(updateIssue)}
          onKeyDown={(event) => {
            if (event.keyCode === KeyCodes.ENTER) {
              event.target.blur();
            }
            if (event.keyCode === KeyCodes.ESCAPE) {
            }
          }}
          invalid={error}
        />
      </Title>
      {error && <ErrorMessage error={error} />}
    </Wrapper>
  );
};
