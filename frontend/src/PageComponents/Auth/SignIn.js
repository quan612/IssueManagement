import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { withSignIn } from "shared/HOC";

import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import * as ROUTES from "App/Routes";

import { FormikInput } from "shared/components/FormikPrimitiveComponent";
import { ErrorMessage } from "shared/components/ErrorMessage";
import { Button } from "shared/components/Button";

import { KeyCodes } from "shared/constants/keyCodes";
import { PageContainer, Content, Panel, FormWrapper, Title, PanelFooter } from "./styles";

const SignIn = ({ authentication, loading, error, onSignIn }) => {
  let history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!").email("Please use a valid email!"),

    password: Yup.string().required("Password is required!"),
  });

  const handleOnChange = (e, formik) => {
    const { name } = e.target;
    formik.setFieldError(name, null);
    formik.handleChange(e);
  };

  const handleKeyDown = (event, formik) => {
    if (event.keyCode === KeyCodes.ENTER) formik.handleSubmit();
  };

  if (authentication) {
    return <Redirect to="/projects" />;
  } else
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors }) => {
          await onSignIn(values);
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik) => (
          <PageContainer name="AuthPageContainer">
            <Content name="Content">
              <Panel name="Panel">
                <Title>Log in to your account</Title>
                <FormWrapper onSubmit={formik.handleSubmit}>
                  <FormikInput
                    icon={"user"}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(event) => handleOnChange(event, formik)}
                    onKeyDown={(event) => handleKeyDown(event, formik)}
                    form="novalidatedform"
                  />

                  <FormikInput
                    icon={"lock-open"}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(event) => handleOnChange(event, formik)}
                    onKeyDown={(event) => handleKeyDown(event, formik)}
                  />

                  <div className="text-center my-3">
                    <Button
                      type="submit"
                      isWorking={loading}
                      variant="primary"
                      onClick={() => {}}
                      width="100%"
                    >
                      Log In
                    </Button>
                  </div>

                  {error && (
                    <ErrorMessage error={error.message.split("GraphQL error:")} />
                  )}
                </FormWrapper>
                <PanelFooter>
                  <div className="flex justify-between">
                    <NavLink to={ROUTES.RESETPASSWORD}>Reset Password</NavLink>
                    <NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
                  </div>
                </PanelFooter>
              </Panel>
            </Content>
          </PageContainer>
        )}
      </Formik>
    );
};

export default withSignIn(SignIn);
