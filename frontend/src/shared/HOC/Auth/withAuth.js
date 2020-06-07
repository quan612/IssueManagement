import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER_QUERY } from "shared/GraphQL/User";

const withAuth = (BaseComponent) => ({ ...props }) => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);

  console.log("data", data);

  if (loading || !data.hasOwnProperty("me"))
    return <p>Trying to authenticate</p>;
  else return <BaseComponent authentication={data.me} />;
};

export default withAuth;
