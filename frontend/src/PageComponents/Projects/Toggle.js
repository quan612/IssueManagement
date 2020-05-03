import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import { ItemContainer } from "./styles";
import { Button } from "shared/components/Button";

const Toggle = () => {
  const [open, setOpen] = useState(false);
  const handleFormOpen = () => setOpen(true);
  const handleFormClose = () => setOpen(false);

  if (open) {
    return (
      <ItemContainer>
        <ProjectForm onClose={handleFormClose} />
      </ItemContainer>
    );
  }

  return (
    <Button className="mt-2" variant="info" onClick={handleFormOpen}>
      Add
    </Button>
  );
};

export default Toggle;
