import React from "react";
import { useMutation } from "react-apollo";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";

import { FormikInput } from "shared/components/FormikPrimitiveComponent";
import { PageContainer, Panel, FormWrapper, Title } from "./styles";
import { ErrorMessage } from "shared/components/ErrorMessage";
import { withUserSignUp } from "shared/HOC/withUserMutation";

const Signup = ({ loading, error, onSignUp, ...props }) => {
  const { history } = props;

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required!")
      .email("Please use a valid email"),

    name: Yup.string().required(" Name is required!"),

    password: Yup.string()
      .required(" Password is required!")
      .min(5, "Password min length is 5"),
  });

  const handleOnChange = (e, formik) => {
    const { name } = e.target;
    formik.setFieldError(name, null);
    formik.handleChange(e);
  };

  const handleKeyDown = (event, formik) => {
    if (event.keyCode === KeyCodes.ENTER) formik.handleSubmit();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        const result = await onSignUp(values);
        // ISSUE here
        if (result) history.push("/projects");
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => (
        <PageContainer>
          <Panel>
            <FormWrapper onSubmit={formik.handleSubmit}>
              <Title>Sign Up New User</Title>

              <FormikInput
                placeholder="Email"
                type="email"
                name="email"
                onChange={(event) => handleOnChange(event, formik)}
                onKeyDown={(event) => handleKeyDown(event, formik)}
                form="novalidatedform"
              />

              <FormikInput
                placeholder="Username"
                type="text"
                name="name"
                maxlength="20"
                onChange={(event) => handleOnChange(event, formik)}
                onKeyDown={(event) => handleKeyDown(event, formik)}
              />

              <FormikInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={(event) => handleOnChange(event, formik)}
                onKeyDown={(event) => handleKeyDown(event, formik)}
              />

              <div className="btn-wrapper text-center mt-5">
                <Button
                  type="submit"
                  isWorking={loading}
                  variant="info"
                  onClick={() => {}}
                  width="100%"
                >
                  SUBMIT
                </Button>
              </div>

              {error && (
                <ErrorMessage error={error.message.split("GraphQL error:")} />
              )}
            </FormWrapper>
          </Panel>
        </PageContainer>
      )}
    </Formik>
  );
};

export default withUserSignUp(Signup);
