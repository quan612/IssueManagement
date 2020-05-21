import React, { useRef, useState } from "react";

import { Section } from "shared/components/Section";
import { Input } from "shared/components/Input";
import { ErrorMessage } from "shared/components/ErrorMessage";
import { KeyCodes } from "shared/constants/keyCodes";

import { Container, Bar, Progress, Description } from "./styles";

export const IssueDetailsTracking = ({ issue, updateIssue }) => {
  const trackingRef = useRef();
  const [isEdit, setEdit] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateTracking = () => {
    if (parseInt(trackingRef.current.value) >= 0) {
      updateIssue({ timeSpent: parseInt(trackingRef.current.value) });
      setEdit(false);
    } else setError("Tracking cannot be < 0.");
  };

  const handleRenderTracking = () => {
    let progress;
    if (issue.timeSpent === 0) progress = "0%";
    else if (issue.timeSpent > issue.estimate) progress = "100%";
    else progress = (issue.timeSpent / issue.estimate) * 100 + "%";

    if (isEdit)
      return (
        <>
          <Input
            type="number"
            name="tracking"
            placeholder="0h"
            max="999"
            focus={true}
            defaultValue={issue.timeSpent}
            ref={trackingRef}
            onBlur={handleUpdateTracking}
            onChange={() => {}}
            onKeyDown={(event) => {
              if (event.keyCode === KeyCodes.ENTER) event.target.blur();
            }}
          />
          {error && <ErrorMessage error={error} />}
        </>
      );
    else
      return (
        <Container onClick={() => setEdit(true)}>
          <Bar>
            <Progress>{progress}</Progress>
          </Bar>
          <Description>
            <span>
              {issue.timeSpent === 0
                ? "No time logged"
                : `${issue.timeSpent}h logged`}
            </span>
            {issue.estimate !== 0 && (
              <span>{`${issue.estimate}h estimated`}</span>
            )}
          </Description>
        </Container>
      );
  };
  return <Section title="Time Tracking">{handleRenderTracking()}</Section>;
};
