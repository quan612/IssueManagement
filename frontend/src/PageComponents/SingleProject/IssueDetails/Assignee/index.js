import React from "react";
import UserAvatar from "shared/components/Avatar";
import { Section } from "shared/components/Section";
import { Select } from "shared/components/Select";
import { SelectItemLabel } from "shared/components/styles";

export const IssueDetailsAssignee = ({ issue, updateIssue, users }) => {
  const userOptions = [{ name: "Unassigned" }, ...users];

  return (
    <Section title="Assignee">
      <Select
        title={issue.assignee ? issue.assignee : { name: "Unassigned" }}
        items={userOptions}
        renderMenuOption={renderUsers}
        onChange={(userObj) => {
          //when selecting the same assignee -> do not update
          if (issue.assignee && userObj.id === issue.assignee.id) return;
          updateIssue({
            assignee: userObj.name !== "Unassigned" ? userObj.id : null,
            actionType: "IssueAssigneeChange",
          });
        }}
      />
    </Section>
  );
};

const renderUsers = (userObj) => {
  const { name } = userObj;
  return (
    <>
      <div>
        {userObj.name !== "Unassigned" ? (
          <UserAvatar
            user={userObj}
            size={30}
            src={userObj.avatar}
            className="mr-2"
          />
        ) : null}
      </div>
      <SelectItemLabel>{name}</SelectItemLabel>
    </>
  );
};
