import React from "react";
import { Select } from "shared/components/Select";
import { IssueType } from "shared/constants/issues";

import { Wrapper, SelectItemWrapper, SelectItemLabel } from "./styles";
import IssueTypeIcon from "shared/components/IssueTypeIcon";

export const IssueDetailsType = ({ issue, updateIssue }) => {
  return (
    <Wrapper>
      <Select
        title={issue.type}
        items={Object.values(IssueType)}
        renderMenuOption={renderIssueType}
        onChange={(type) => {
          updateIssue({ type, actionType: "IssueTypeChange" });
        }}
        variant="empty"
        withArrow={false}
      />
    </Wrapper>
  );
};

const renderIssueType = (type) => {
  return (
    <SelectItemWrapper>
      <IssueTypeIcon type={type} />
      <SelectItemLabel>{type}</SelectItemLabel>
    </SelectItemWrapper>
  );
};
