import React from "react";
import { ErrorContainer, Message } from "./styles";

export const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <Message>{error}</Message>
    </ErrorContainer>
  );
};
