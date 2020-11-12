import React from "react";

import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";
import { IssueType } from "shared/constants/issues";
import IssueTypeIcon from "shared/components/IssueTypeIcon";

export const IssueDetailsType = ({ issue, updateIssue }) => {
  return (
    <Section title="Type">
      <Select
        selected={issue.type}
        items={Object.values(IssueType)}
        renderIcon={renderIssueType}
        onChange={(type) => {
          updateIssue({ type, actionType: "IssueTypeChange" });
        }}
        variant="empty"
        withArrow={false}
      />
    </Section>
  );
};

const renderIssueType = (type) => <IssueTypeIcon type={type} />;
