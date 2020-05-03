import React from "react";
import { useQuery } from "react-apollo";
import {
  ALL_USERS_QUERY,
  SINGLE_USER_QUERY,
  CURRENT_USER_CACHE_QUERY,
} from "shared/HOC/GraphQL/User";

export const withUsersQuery = (Component) => ({ ...props }) => {
  const { data, loading, error } = useQuery(ALL_USERS_QUERY);

  if (loading) return <p>Loading users</p>;
  else {
    const { users } = data;
    return <Component users={users} {...props} />;
  }
};

export const withSingleUserQuery = (Component) => ({ ...props }) => {
  const { data, loading, error } = useQuery(SINGLE_USER_QUERY);

  if (loading) return <p>Loading users</p>;
  else {
    const { users } = data;
    return <Component user={users} {...props} />;
  }
};

export const currentUserLogIn = (Component) => ({ ...props }) => {
  const { data, loading } = useQuery(CURRENT_USER_CACHE_QUERY);

  if (data.me) return <Component currentLogInUser={data.me} {...props} />;
};
