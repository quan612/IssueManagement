import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_TOAST_MUTATION } from "shared/GraphQL/Client";

export const withToastCreate = (BaseComponent) => (props) => {
  const [createToast] = useMutation(CREATE_TOAST_MUTATION);

  return <BaseComponent createToast={createToast} {...props} />;
};
