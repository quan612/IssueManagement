import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SelectContainer,
  SelectValueContainer,
  MenuContainer,
  MenuItemContainer,
} from "./styles";

export const Select = ({
  title,
  items,
  renderMenuOption,
  onChange,
  variant = "normal",
  withArrow = true,
  width,
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
      <SelectValueContainer onClick={toggle}>
        {renderMenuOption(title)}
        {withArrow && (
          <FontAwesomeIcon
            className="ml-auto"
            icon={isOpen ? "angle-up" : "angle-down"}
            size="1x"
          />
        )}
      </SelectValueContainer>
      {isOpen && (
        <MenuContainer>
          {items.map((item) => (
            <MenuItemContainer
              key={item.id ? item.id : item}
              onClick={() => handleSelect(item)}
            >
              {renderMenuOption(item)}
            </MenuItemContainer>
          ))}
        </MenuContainer>
      )}
    </SelectContainer>
  );
};
