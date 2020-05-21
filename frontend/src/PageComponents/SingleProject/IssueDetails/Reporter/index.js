import React from "react";
import UserAvatar from "shared/components/Avatar";
import { Section } from "shared/components/Section";
import { Container, Wrapper } from "./styles";
import { SelectItemLabel } from "shared/components/styles";

export const IssueDetailsReporter = ({ reporter }) => {
  return (
    <Section title="Reporter">
      <Container>
        <Wrapper>
          <UserAvatar
            user={reporter}
            size={30}
            src={reporter.avatar}
            className="mr-2"
          />
          <SelectItemLabel>{reporter.name}</SelectItemLabel>
        </Wrapper>
      </Container>
    </Section>
  );
};
