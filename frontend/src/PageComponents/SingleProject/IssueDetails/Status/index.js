import React from "react";

import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";
import { IssueStatus, IssueStatusDescription } from "shared/constants/issues";
import { StatusStyle } from "shared/components/styles";

const IssueStatusChange = "Status";

export const IssueDetailsStatus = ({ issue, updateIssue }) => {
  return (
    <Section title="Status">
      <Select
        selected={issue.status}
        items={Object.values(IssueStatus)}
        renderIcon={renderIssueStatus}
        onChange={(status) => updateIssue({ status, actionType: IssueStatusChange })}
        renderItem={false}
      />
    </Section>
  );
};

const renderIssueStatus = (status) => {
  return (
    <StatusStyle status={status}>
      <div>{IssueStatusDescription[status]}</div>
    </StatusStyle>
  );
};
