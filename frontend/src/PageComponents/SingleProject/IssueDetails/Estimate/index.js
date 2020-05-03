import React, { useRef, useState } from "react";
import { Section } from "shared/components/Section";
import { EstimateContainer } from "./styles";
import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";

export const IssueDetailsEstimate = ({ issue, updateIssue }) => {
  const estimateRef = useRef();
  const [isEdit, setEdit] = useState(false);

  const handleUpdateEstimate = () => {
    updateIssue({ estimate: parseInt(estimateRef.current.value) });
    setEdit(false);
  };

  const handleRenderEstimation = () => {
    if (isEdit)
      return (
        <Input
          type="number"
          name="estimate"
          placeholder="0h"
          max="999"
          defaultValue={issue.estimate}
          ref={estimateRef}
          onBlur={handleUpdateEstimate}
          onChange={() => {}}
          onKeyDown={(event) => {
            if (event.keyCode === KeyCodes.ENTER) {
              event.target.blur();
            }
          }}
        ></Input>
      );
    else
      return (
        <EstimateContainer onClick={() => setEdit(true)}>
          {issue.estimate} {issue.estimate > 1 ? `hours` : `hour`}
        </EstimateContainer>
      );
  };
  return <Section title="Estimate">{handleRenderEstimation()}</Section>;
};
