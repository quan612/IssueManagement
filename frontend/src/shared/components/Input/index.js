import React, { forwardRef, useEffect } from "react";
import { InputContainer, StyledInput } from "./styles";

//todo: add input count

export const Input = forwardRef(({ icon, onChange, focus = false, invalid, ...props }, ref) => {
  useEffect(() => {
    if (ref && ref.current && focus) {
      ref.current.focus();
    }
  }, []);

  return (
    <InputContainer>
      {icon && <span className="icon"></span>}
      <StyledInput {...props} onChange={onChange} ref={ref} invalid={invalid} />
    </InputContainer>
  );
});
