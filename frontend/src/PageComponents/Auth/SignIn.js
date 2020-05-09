import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { withSignIn } from "shared/HOC";

import { Formik } from "formik";
import * as Yup from "yup";

import { FormikInput } from "shared/components/FormikPrimitiveComponent";
import { PageContainer, Panel, FormWrapper, Title } from "./styles";
import { ErrorMessage } from "shared/components/ErrorMessage";

import { KeyCodes } from "shared/constants/keyCodes";
import { Button } from "shared/components/Button";

const SignIn = ({ authentication, loading, error, onSignIn }) => {
  let history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  console.log(authentication);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is required!")
      .email("Please use a valid email"),

    password: Yup.string().required(" Password is required!"),
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
          <PageContainer>
            <Panel>
              <FormWrapper onSubmit={formik.handleSubmit}>
                <Title>Sign In</Title>
                <FormikInput
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={(event) => handleOnChange(event, formik)}
                  onKeyDown={(event) => handleKeyDown(event, formik)}
                  form="novalidatedform"
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

                <div className="reset-password">
                  <a
                    href="/#"
                    className="cursor-pointer text-blue-600 hover:text-blue-800 font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/reset");
                    }}
                  >
                    Reset Password
                  </a>
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

export default withSignIn(SignIn);
