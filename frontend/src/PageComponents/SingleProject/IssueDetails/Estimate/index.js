import React, { useRef, useState } from "react";
import { Section } from "shared/components/Section";
import { EstimateContainer } from "./styles";
import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";

import { ErrorMessage } from "shared/components/ErrorMessage";

export const IssueDetailsEstimate = ({ issue, updateIssue }) => {
  const estimateRef = useRef();
  const [isEdit, setEdit] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateEstimate = () => {
    if (parseInt(estimateRef.current.value) >= 0) {
      updateIssue({ estimate: parseInt(estimateRef.current.value) });
      setEdit(false);
    } else setError("Estimate number cannot be < 0.");
  };

  const handleRenderEstimation = () => {
    if (isEdit) {
      return (
        <>
          <Input
            type="number"
            name="estimate"
            placeholder="0h"
            max="999"
            defaultValue={issue.estimate}
            focus={true}
            ref={estimateRef}
            onBlur={handleUpdateEstimate}
            onChange={() => {}}
            onKeyDown={(event) => {
              if (event.keyCode === KeyCodes.ENTER) {
                event.target.blur();
              }
            }}
          ></Input>
          {error && <ErrorMessage error={error} />}
        </>
      );
    } else
      return (
        <EstimateContainer onClick={() => setEdit(true)}>
          {issue.estimate} {issue.estimate > 1 ? `hours` : `hour`}
        </EstimateContainer>
      );
  };
  return <Section title="Estimate">{handleRenderEstimation()}</Section>;
};
