import React from "react";
import { SectionContainer, SectionTitle } from "./styles";

export const Section = (props) => {
  return (
    <SectionContainer>
      {props.title && <SectionTitle>{props.title}</SectionTitle>}
      {props.children}
    </SectionContainer>
  );
};
