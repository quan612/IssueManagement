import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  ALL_USERS_QUERY,
  SINGLE_USER_QUERY,
  CURRENT_USER_CACHE_QUERY,
  SIGN_UP_MUTATION,
  SIGN_IN_MUTATION,
  CURRENT_USER_QUERY,
  RESET_PASSWORD_MUTATION,
  EDIT_USER_MUTATION,
} from "shared/GraphQL/User";

export const withUsersQuery = (Component) => ({ ...props }) => {
  const { data, loading } = useQuery(ALL_USERS_QUERY);

  if (loading) return <p>Loading users</p>;
  else {
    const { users } = data;
    return <Component users={users} {...props} />;
  }
};

export const withSingleUserQuery = (Component) => ({ ...props }) => {
  const { data, loading } = useQuery(SINGLE_USER_QUERY);

  if (loading) return <p>Loading users</p>;
  else {
    const { users } = data;
    return <Component user={users} {...props} />;
  }
};

export const withCurrentUser = (Component) => ({ ...props }) => {
  const { data } = useQuery(CURRENT_USER_CACHE_QUERY);

  if (data.me) return <Component currentLogInUser={data.me} {...props} />;
};

export const withSignUp = (Component) => ({ ...props }) => {
  const [signup, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
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

export const withSignIn = (Component) => ({ ...props }) => {
  const [signin, { loading, error }] = useMutation(SIGN_IN_MUTATION, {
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

export const withUserUpdate = (Component) => ({ ...props }) => {
  const [updateUserInfo, { data, loading: updating, error }] = useMutation(
    EDIT_USER_MUTATION
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
