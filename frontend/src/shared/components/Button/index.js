import React, { forwardRef } from "react";

import { StyledButton, StyledChildren } from "./styles";
import Spinner from "shared/components/Spinner";

export const Button = forwardRef(
  (
    { children, variant, disabled, isWorking, onClick, ...buttonProps },
    ref
  ) => {
    const handleOnClick = () => {
      if (!disabled && !isWorking) {
        onClick();
      }
    };

    return (
      <StyledButton
        onClick={handleOnClick}
        variant={variant}
        disabled={disabled || isWorking}
        isWorking={isWorking}
        ref={ref}
        {...buttonProps}
      >
        <StyledChildren>
          {isWorking ? (
            <Spinner color="white" size={18} />
          ) : (
            children && <span>{children}</span>
          )}
        </StyledChildren>
      </StyledButton>
    );
  }
);
