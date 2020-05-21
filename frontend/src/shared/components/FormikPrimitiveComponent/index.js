import React, { useRef } from "react";
import { useField } from "formik";
import { Select } from "../Select";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

import { Section } from "shared/components/Section";
import { ErrorMessage } from "shared/components/ErrorMessage";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor5-build-classic-with-font/ckeditor5-build-classic";

export const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Section title={label}>
      <Select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error.name}</ErrorMessage>
      ) : null}
    </Section>
  );
};

export const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const ref = useRef();

  return (
    <Section title={label}>
      <Input {...field} {...props} invalid={meta.error} ref={ref} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Section>
  );
};

export const FormikTextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <Section title={label}>
      <TextArea {...field} {...props} />
    </Section>
  );
};

export const FormikCKEditor = ({ label, ...props }) => {
  return (
    <Section title={label}>
      <CKEditor editor={ClassicEditor} onInit={(editor) => {}} {...props} />
    </Section>
  );
};
