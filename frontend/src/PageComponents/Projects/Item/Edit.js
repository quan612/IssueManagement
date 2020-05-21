import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexItemsWrapper } from "shared/components/styles";
import { IconWrapper, Label } from "./styles";

const ProjectEdit = ({ onOpen }) => {
  return (
    <FlexItemsWrapper onClick={onOpen} className="hover:bg-gray-400 py-2">
      <IconWrapper>
        <FontAwesomeIcon icon="edit" style={{ color: "black" }} />
      </IconWrapper>
      <Label>Edit</Label>
    </FlexItemsWrapper>
  );
};

export default ProjectEdit;
ProjectEdit.displayName = "ProjectEdit";
