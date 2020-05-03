import React from "react";
import { withProjectDelete } from "shared/HOC/withProjectsMutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "shared/components/Spinner";

import { IconContainer } from "./styles";

import { FlexItemsWrapper } from "shared/components/styles";

const handleDeleteProject = (id, onDelete) => {
  // eslint-disable-next-line no-restricted-globals
  if (confirm("Want to delete?")) onDelete(id);
};

const ProjectDelete = ({ id, onDelete, loading }) => {
  if (loading) {
    return (
      <FlexItemsWrapper className="hover:bg-gray-400 py-2">
        <IconContainer>
          <Spinner color="#D7363C" size={20} />
        </IconContainer>
        <div>Delete</div>
      </FlexItemsWrapper>
    );
  }

  return (
    <FlexItemsWrapper
      className="hover:bg-gray-400 py-2"
      onClick={() => handleDeleteProject(id, onDelete)}
    >
      <IconContainer>
        <FontAwesomeIcon icon="trash-alt" style={{ color: "red" }} />
      </IconContainer>
      <div>Delete</div>
    </FlexItemsWrapper>
  );
};

export default withProjectDelete(ProjectDelete);
