import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectContainer, SelectedItemWrapper, Item, MenuContainer, MenuItem } from "./styles";

export const Select = ({
  selected,
  items,
  renderIcon = () => {},
  onChange,
  variant = "normal",
  width,
  renderItem = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) return;
    setIsOpen(false);
  };

  const handleSelect = (item) => {
    onChange(item);
    toggle();
  };

  return (
    <SelectContainer ref={ref} variant={variant} width={width}>
      <SelectedItemWrapper onClick={toggle}>
        {renderIcon(selected)}
        {renderItem && <Item>{typeof selected === "object" ? selected.name : selected}</Item>}
        <FontAwesomeIcon className="ml-auto" icon={isOpen ? "angle-up" : "angle-down"} size="1x" />
      </SelectedItemWrapper>
      {isOpen && (
        <MenuContainer>
          {items.map((item) => {
            return (
              <MenuItem key={item.id ? item.id : item} onClick={() => handleSelect(item)}>
                {renderIcon(item)}
                {renderItem && <Item>{typeof item === "object" ? item.name : item}</Item>}
                {item === selected && <FontAwesomeIcon className="ml-auto" icon={"check"} color={"black"} />}
              </MenuItem>
            );
          })}
        </MenuContainer>
      )}
    </SelectContainer>
  );
};
