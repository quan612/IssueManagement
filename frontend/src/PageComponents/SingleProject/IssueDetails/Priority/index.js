import React from "react";

import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";
import { IssuePriority } from "shared/constants/issues";
import IssuePriorityIcon from "shared/components/IssuePriorityIcon";

const IssuePriorityChange = "Priority";

export const IssueDetailsPriority = ({ issue, updateIssue }) => {
  return (
    <Section title="Priority">
      <Select
        selected={issue.priority}
        items={Object.values(IssuePriority)}
        renderIcon={renderIssuePriority}
        onChange={(priority) => updateIssue({ priority, actionType: IssuePriorityChange })}
      />
    </Section>
  );
};

const renderIssuePriority = (priority) => <IssuePriorityIcon priority={priority} className="mr-2" />;
