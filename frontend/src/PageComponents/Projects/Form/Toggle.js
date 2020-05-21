import React, { useState } from "react";

import Form from "./index";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "./styles";

const Toggle = () => {
  const [isOpen, setOpen] = useState(false);

  if (isOpen) {
    return <Form onClose={() => setOpen(false)} />;
  }

  return (
    <ButtonWrapper>
      <Button variant="primary-outline" onClick={() => setOpen(true)}>
        New Project
      </Button>
    </ButtonWrapper>
  );
};

export default Toggle;
