import React, { useRef } from "react";
import { useField } from "formik";
import { Select } from "../Select";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Section, Label, Error } from "./styles";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor5-build-classic-with-font/ckeditor5-build-classic";

export const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Section>
      {label && <Label>{label}</Label>}
      <Select {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error.name}</Error> : null}
    </Section>
  );
};

export const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const ref = useRef();

  return (
    <Section>
      {label && <Label>{label}</Label>}
      <Input {...field} {...props} invalid={meta.error} ref={ref} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </Section>
  );
};

export const FormikTextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <Section>
      {label && <Label>{label}</Label>}
      <TextArea {...field} {...props} />
    </Section>
  );
};

export const FormikCKEditor = ({ label, ...props }) => {
  return (
    <Section>
      {label && <Label>{label}</Label>}

      <CKEditor editor={ClassicEditor} onInit={(editor) => {}} {...props} />
    </Section>
  );
};
