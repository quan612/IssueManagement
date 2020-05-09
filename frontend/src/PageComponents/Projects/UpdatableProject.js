import React, { useState, useEffect, useRef, forwardRef } from "react";

import { useOutsideClick } from "shared/hooks/useOutsideClick";
import ProjectDelete from "./ProjectDelete";
import ProjectForm from "./ProjectForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ItemStyle,
  ItemTitle,
  ItemDescription,
  SmallIconContainer,
  EllipsisV,
  Menu,
  IconContainer,
} from "./styles";

import { FlexItemsWrapper } from "shared/components/styles";

const UpdatableProject = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const ellipsisRef = useRef();

  const handleFormOpen = () => setEdit(true);
  const handleFormClose = () => setEdit(false);

  if (!edit) {
    const { id, name, description } = data;
    return (
      <ItemStyle>
        <Link to={`/projects/${id}`} className="w-full">
          <div className="w-full">
            <ItemTitle>{name}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
          </div>
        </Link>
        <SmallIconContainer>
          <EllipsisV ref={ellipsisRef}>
            <FontAwesomeIcon
              icon="ellipsis-v"
              color="white"
              size={"lg"}
              onClick={() => setShowMenu(!showMenu)}
            />
          </EllipsisV>
        </SmallIconContainer>
        {showMenu && (
          <ProjectMenu
            ref={ellipsisRef}
            onMenuClose={() => setShowMenu(!showMenu)}
            handleFormOpen={handleFormOpen}
            id={id}
          />
        )}
      </ItemStyle>
    );
  } else {
    return <ProjectForm data={data} onClose={handleFormClose} />;
  }
};

const ProjectMenu = forwardRef(({ onMenuClose, handleFormOpen, id }, ref) => {
  const menuRef = useRef();
  useOutsideClick(menuRef, ref, onMenuClose);

  return (
    <Menu ref={menuRef}>
      <ProjectEditIcon
        onOpen={() => {
          onMenuClose();
          handleFormOpen();
        }}
      />
      <ProjectDelete id={id} />
    </Menu>
  );
});

const ProjectEditIcon = ({ onOpen }) => {
  return (
    <FlexItemsWrapper onClick={onOpen} className="hover:bg-gray-400 py-2">
      <IconContainer>
        <FontAwesomeIcon icon="edit" style={{ color: "black" }} />
      </IconContainer>
      <div>Edit</div>
    </FlexItemsWrapper>
  );
};

export default UpdatableProject;
