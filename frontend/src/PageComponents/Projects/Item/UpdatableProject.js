import React, { useState, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "shared/hooks/useOutsideClick";

import ProjectForm from "../Form";
import ProjectDelete from "./Delete";
import ProjectEdit from "./Edit";

import {
  ItemStyle,
  Name,
  Description,
  EllipsisVContainer,
  EllipsisV,
  Menu,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdatableProject = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const ellipsisRef = useRef();

  if (!edit) {
    const { id, name, description } = data;
    return (
      <ItemStyle>
        <Link to={`/projects/${id}`} className="w-full">
          <div className="w-full">
            <Name>{name}</Name>
            <Description>{description}</Description>
          </div>
        </Link>
        <EllipsisVContainer>
          <EllipsisV ref={ellipsisRef}>
            <FontAwesomeIcon
              icon="ellipsis-v"
              color="white"
              size={"lg"}
              onClick={() => setShowMenu(!showMenu)}
            />
          </EllipsisV>
        </EllipsisVContainer>
        {showMenu && (
          <ProjectMenu
            ref={ellipsisRef}
            onMenuClose={() => setShowMenu(!showMenu)}
            onOpen={() => setEdit(true)}
            id={id}
          />
        )}
      </ItemStyle>
    );
  } else {
    return <ProjectForm data={data} onClose={() => setEdit(false)} />;
  }
};

export const ProjectMenu = forwardRef(({ onMenuClose, onOpen, id }, ref) => {
  const menuRef = useRef();
  useOutsideClick(menuRef, ref, onMenuClose);

  return (
    <Menu ref={menuRef}>
      <ProjectEdit
        onOpen={() => {
          onMenuClose();
          onOpen();
        }}
      />
      <ProjectDelete id={id} />
    </Menu>
  );
});

export default UpdatableProject;

ProjectMenu.displayName = "ProjectMenu";
