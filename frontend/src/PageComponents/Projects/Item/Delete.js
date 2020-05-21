import React from "react";
import { withProjectDelete, withToastCreate } from "shared/HOC";
import { flowRight } from "lodash";

import Spinner from "shared/components/Spinner";
import { IconWrapper, Label } from "./styles";
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

  return (
    <FlexItemsWrapper
      className="hover:bg-gray-400 py-2"
      onClick={() => handleDeleteProject(id)}
    >
      <IconWrapper>
        {loading ? (
          <Spinner color="#D7363C" size={20} />
        ) : (
          <FontAwesomeIcon icon="trash-alt" style={{ color: "red" }} />
        )}
      </IconWrapper>
      <Label>Delete</Label>
    </FlexItemsWrapper>
  );
};
ProjectDelete.displayName = "ProjectDelete";

export default flowRight(withProjectDelete, withToastCreate)(ProjectDelete);
