import React, { forwardRef, useEffect } from "react";
import { InputContainer, StyledInput, IconContainer } from "./styles";
import { ThemeIcon } from "shared/components/Icon";

//todo: add input count

export const Input = forwardRef(({ icon, onChange, focus = false, invalid, ...props }, ref) => {
  useEffect(() => {
    if (ref && ref.current && focus) {
      ref.current.focus();
    }
  }, []);

  return (
    <InputContainer>
      {icon && (
        <IconContainer>
          <ThemeIcon icon={icon} />
        </IconContainer>
      )}
      <StyledInput icon={icon} {...props} onChange={onChange} ref={ref} invalid={invalid} />
    </InputContainer>
  );
});
