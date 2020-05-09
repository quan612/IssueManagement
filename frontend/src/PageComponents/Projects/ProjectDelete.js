import React from "react";
import { withProjectDelete, withToastCreate } from "shared/HOC";
import { flowRight } from "lodash";

import Spinner from "shared/components/Spinner";
import { IconContainer } from "./styles";
import { FlexItemsWrapper } from "shared/components/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDelete = ({ id, onDelete, loading, createToast }) => {
  const handleDeleteProject = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Want to delete?")) {
      let result = await onDelete(id);
      if (result)
        createToast({
          variables: { type: "success", message: "Delete project success!" },
        });
    }
  };

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
      onClick={() => handleDeleteProject(id)}
    >
      <IconContainer>
        <FontAwesomeIcon icon="trash-alt" style={{ color: "red" }} />
      </IconContainer>
      <div>Delete</div>
    </FlexItemsWrapper>
  );
};

export default flowRight(withProjectDelete, withToastCreate)(ProjectDelete);
