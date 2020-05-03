import React from "react";

import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";
import { IssuePriority } from "shared/constants/issues";

import { SelectItemWrapper } from "./styles";
import { SelectItemLabel } from "shared/components/styles";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";

export const IssueDetailsPriority = ({ issue, updateIssue }) => {
  return (
    <Section title="Priority">
      <Select
        title={issue.priority}
        items={Object.values(IssuePriority)}
        renderMenuOption={renderIssuePriority}
        onChange={(priority) =>
          updateIssue({ priority, actionType: "IssuePriorityChange" })
        }
      />
    </Section>
  );
};

const renderIssuePriority = (priority) => {
  return (
    <SelectItemWrapper>
      <IssuePriorityIcon priority={priority} className="mr-2" />
      <SelectItemLabel>{priority}</SelectItemLabel>
    </SelectItemWrapper>
  );
};
