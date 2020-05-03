import React from "react";
import UserAvatar from "shared/components/Avatar";
import { Section } from "shared/components/Section";
import { Container } from "./styles";
import { SelectItemLabel } from "shared/components/styles";

export const IssueDetailsReporter = ({ reporter }) => {
  return (
    <>
      <Section title="Reporter">
        <Container>
          <div>
            <UserAvatar
              user={reporter}
              size={25}
              src={reporter.avatar}
              className="mr-2"
            />
          </div>
          <div>
            <SelectItemLabel>{reporter.name}</SelectItemLabel>
          </div>
        </Container>
      </Section>
    </>
  );
};
