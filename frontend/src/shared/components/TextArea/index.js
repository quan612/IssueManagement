import React, { forwardRef, useEffect } from "react";
import { TextAreaContainer, StyledTextArea } from "./styles";

/* the component need to pass the className so the style can be changed */

export const TextArea = forwardRef(({ className, onChange, ...props }, ref) => {
  const { focus } = props;
  useEffect(() => {
    if (ref && ref.current && focus === true) ref.current.focus();
  }, []);

  return (
    <TextAreaContainer className={className}>
      <StyledTextArea {...props} onChange={onChange} ref={ref} />
    </TextAreaContainer>
  );
});
