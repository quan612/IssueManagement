import React from "react";
import { useMutation } from "react-apollo";
import {
  SIGNUP_MUTATION,
  SIGNIN_MUTATION,
  CURRENT_USER_QUERY,
  RESET_PASSWORD_MUTATION,
  USERINFO_MUTATION,
} from "shared/HOC/GraphQL/User";

export const withUserSignUp = (Component) => ({ ...props }) => {
  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleOnSignUp = async (user) => {
    return await signup({
      variables: {
        ...user,
      },
    });
  };

  return (
    <Component
      {...props}
      loading={loading}
      error={error}
      onSignUp={(user) => handleOnSignUp(user)}
    />
  );
};

export const withUserSignIn = (Component) => ({ ...props }) => {
  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleOnSignIn = async (user) => {
    return await signin({
      variables: {
        ...user,
      },
    });
  };

  return (
    <Component
      {...props}
      loading={loading}
      error={error}
      onSignIn={(user) => handleOnSignIn(user)}
    />
  );
};

export const withPasswordReset = (Component) => ({ ...props }) => {
  const [resetPassword, { data, loading, error }] = useMutation(
    RESET_PASSWORD_MUTATION
  );

  const handleOnResetPassword = async (user) => {
    return await resetPassword({
      variables: {
        ...user,
      },
    });
  };

  return (
    <Component
      {...props}
      loading={loading}
      error={error}
      onResetPassword={(user) => handleOnResetPassword(user)}
    />
  );
};

export const withEditUser = (Component) => ({ ...props }) => {
  const [updateUserInfo, { data, loading: updating, error }] = useMutation(
    USERINFO_MUTATION
  );

  const handleOnUpDateUser = async (user) => {
    return await updateUserInfo({
      variables: {
        ...user,
      },
    });
  };

  return (
    <Component
      {...props}
      updating={updating}
      error={error}
      onUpdateUser={(user) => handleOnUpDateUser(user)}
    />
  );
};
