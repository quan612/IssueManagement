import React, { useState, useRef } from "react";
import {
  withProjectCreate,
  withProjectUpdate,
  withToastCreate,
} from "shared/HOC";

import { flowRight } from "lodash";

import { Section } from "shared/components/Section";
import { Input } from "shared/components/Input";
import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";
import { ButtonWrapper } from "shared/components/styles";
import { ErrorMessage } from "shared/components/ErrorMessage";
import { FormContainer } from "./styles";

const ProjectForm = ({
  data = [],
  onClose,
  onCreate,
  onUpdate,
  loading,
  onCreating,
  createToast,
}) => {
  const [project, setProject] = useState({
    name: data.name || "",
    description: data.description || "",
  });

  const [inputError, setError] = useState({});
  const inputRef = useRef();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value !== "") setError({});
    setProject((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async () => {
    if (project.name === "") {
      setError({ message: "Name cannot be null" });
      return;
    }

    //add new
    if (!data.id) {
      let result = await onCreate(project);

      if (result)
        createToast({
          variables: {
            type: "success",
            message: `Create project success!`,
          },
        });
    }

    //update
    else {
      let result = await onUpdate(data.id, project);
      if (result)
        createToast({
          variables: { type: "success", message: "Modify project success!" },
        });
    }
    onClose();
  };

  return (
    <FormContainer>
      <Section title="Project Name">
        <Input
          type="text"
          name="name"
          value={project.name}
          onChange={handleOnChange}
          onKeyDown={(event) => {
            if (event.keyCode === KeyCodes.ENTER) handleOnSubmit();
          }}
          ref={inputRef}
          focus={true}
        />
      </Section>

      <Section title="Project Description">
        <Input
          type="text"
          name="description"
          value={project.description}
          onChange={handleOnChange}
          onKeyDown={(event) => {
            if (event.keyCode === KeyCodes.ENTER) handleOnSubmit();
          }}
        />
      </Section>
      {inputError && <ErrorMessage error={inputError.message} />}

      <ButtonWrapper>
        <Button
          isWorking={loading || onCreating}
          variant="primary-outline"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
        <Button disabled={loading} variant="info" onClick={onClose}>
          Cancel
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default flowRight(
  withProjectCreate,
  withProjectUpdate,
  withToastCreate
)(ProjectForm);
