import React, { useState } from "react";
import { ContentEditable, EmptyLabel, ButtonWrapper } from "./styles";
import { Section } from "shared/components/Section";
import { Button } from "shared/components/Button";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor5-build-classic-with-font/ckeditor5-build-classic";

export const IssueDetailsDescription = ({ issue, updateIssue, isWorking }) => {
  const [isEditing, setEditing] = useState(false);
  const [description, setDescription] = useState(issue.description);

  const handleUpdate = async () => {
    if (description !== issue.description) await updateIssue({ description });
    setEditing(false);
  };

  const handleChange = (value) => {
    setDescription(value);
  };

  const handleRenderDescription = () => {
    if (isEditing === true) {
      return (
        <>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onInit={(editor) => {}}
            onChange={(e, editor) => {
              handleChange(editor.getData());
            }}
          />
          <ButtonWrapper>
            <Button
              isWorking={isWorking}
              disable={isWorking}
              variant="primary-outline"
              onClick={handleUpdate}
            >
              Save
            </Button>

            <Button
              disable={isWorking}
              variant="info"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </>
      );
    } else {
      if (issue.description === "")
        return (
          <EmptyLabel onClick={() => setEditing(true)}>
            Add a description...
          </EmptyLabel>
        );
      else
        return (
          <ContentEditable
            onClick={() => setEditing(true)}
            dangerouslySetInnerHTML={{ __html: issue.description }}
          />
        );
    }
  };

  return <Section title="Description">{handleRenderDescription()}</Section>;
};
