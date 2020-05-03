import React from "react";
import { useHistory } from "react-router-dom";
import { withPasswordReset } from "shared/HOC/withUserMutation";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";

import { FormikInput } from "shared/components/FormikPrimitiveComponent";
import { PageContainer, Panel, FormWrapper, Title } from "./styles";
import { ErrorMessage } from "shared/components/ErrorMessage";

const ResetPassword = ({ loading, error, onResetPassword, ...props }) => {
  let history = useHistory();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required!")
      .email("Please use a valid email"),

    password: Yup.string()
      .required(" Password is required!")
      .min(5, "Password min length is 5"),

    confirmPassword: Yup.string().required(" Confirm Password is required!")
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
        const result = await onResetPassword(values);
        // add notifcation that password reset successfully
        if (result) setTimeout(history.push("/signin"), 3000);
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {formik => (
        <PageContainer>
          <Panel>
            <FormWrapper onSubmit={formik.handleSubmit}>
              <Title>Reset Password</Title>
              <FormikInput
                placeholder="Email"
                type="email"
                name="email"
                onChange={event => handleOnChange(event, formik)}
                onKeyDown={event => handleKeyDown(event, formik)}
                form="novalidatedform"
              />

              <FormikInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={event => handleOnChange(event, formik)}
                onKeyDown={event => handleKeyDown(event, formik)}
              />

              <FormikInput
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                onChange={event => handleOnChange(event, formik)}
                onKeyDown={event => handleKeyDown(event, formik)}
              />

              <div className="mt-5">
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

export default withPasswordReset(ResetPassword);
