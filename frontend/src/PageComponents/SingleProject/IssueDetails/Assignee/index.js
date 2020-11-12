import React from "react";
import UserAvatar from "shared/components/Avatar";
import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";

export const IssueDetailsAssignee = ({ issue, updateIssue, users }) => {
  const userOptions = [{ id: null, name: "Unassigned" }, ...users];

  return (
    <Section title="Assignee">
      <Select
        selected={issue.assignee ? issue.assignee : { name: "Unassigned" }}
        items={userOptions}
        renderIcon={renderUsers}
        onChange={(user) => {
          if (issue.assignee && user.id === issue.assignee.id) return;

          updateIssue({
            assignee: user.name !== "Unassigned" ? user.id : null,
            actionType: "IssueAssigneeChange",
          });
        }}
      />
    </Section>
  );
};

const renderUsers = (user) => <UserAvatar user={user} size={30} src={user.avatar} className="mr-2" />;
