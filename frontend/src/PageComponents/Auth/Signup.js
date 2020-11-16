import React from "react";
import { useHistory } from "react-router-dom";
import { withSignUp } from "shared/HOC";

import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import * as ROUTES from "App/routes";

import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";

import { FormikInput } from "shared/components/FormikPrimitiveComponent";
import { PageContainer, Content, Panel, FormWrapper, Title, PanelFooter } from "./styles";
import { ErrorMessage } from "shared/components/ErrorMessage";

const Signup = ({ loading, error, onSignUp, ...props }) => {
  let history = useHistory();

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(" Email is required!").email("Please use a valid email"),

    name: Yup.string().required(" Name is required!"),

    password: Yup.string().required(" Password is required!").min(5, "Password min length is 5"),
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
        if (result) {
          setTimeout(history.push("/signin"), 2000);
        }
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formik) => (
        <PageContainer>
          <Content name="Content">
            <Panel>
              <Title>Sign up a new account</Title>
              <FormWrapper onSubmit={formik.handleSubmit}>
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

                <div className="text-center mt-3">
                  <Button type="submit" isWorking={loading} variant="primary" onClick={() => {}} width="100%">
                    Sign Up
                  </Button>
                </div>

                {error && <ErrorMessage error={error.message.split("GraphQL error:")} />}
              </FormWrapper>

              <PanelFooter>
                <div className="flex justify-between">
                  <NavLink to={ROUTES.SIGNIN}>Log In</NavLink>
                </div>
              </PanelFooter>
            </Panel>
          </Content>
        </PageContainer>
      )}
    </Formik>
  );
};

export default withSignUp(Signup);
