import React, { useState, useEffect } from "react";

import { Select } from "shared/components/Select";
import { OptionContainer } from "shared/components/Select/styles";
import UserAvatar from "shared/components/Avatar";

import { Wrapper } from "./styles";

const AssignedTo = ({ handleOnFilter, users, reset }) => {
  const userOptions = [{ name: "Reset" }, ...users];
  const [selected, setSelected] = useState(userOptions[0]);

  useEffect(() => {
    if (reset === null) {
      setSelected({ name: "Assigned To" });
    }
  }, [reset]);

  return (
    <Wrapper>
      <Select
        title={selected}
        items={userOptions}
        renderMenuOption={renderUsers}
        onChange={(userObj) => {
          if (userObj.name === "Reset") handleOnFilter({ assignee: null });
          else
            handleOnFilter({
              assignee: { id: userObj.id },
            });
          setSelected(userObj);
        }}
        width={"220px"}
      />
    </Wrapper>
  );
};
export default AssignedTo;

const renderUsers = (userObj) => {
  const { name } = userObj;
  return (
    <OptionContainer>
      <div>{name}</div>
      <div className="mr-2">
        {userObj.name !== "Assigned To" && userObj.name !== "Reset" ? <UserAvatar user={userObj} /> : null}
      </div>
    </OptionContainer>
  );
};
