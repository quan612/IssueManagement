import React from "react";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "shared/HOC/GraphQL/User";

const withAuth = (BaseComponent) => ({ ...props }) => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);

  console.log("data", data);
  if (loading || !data.hasOwnProperty("me"))
    return <p>Loadinggggggggggggggggggggggggggggggggggg</p>;
  else return <BaseComponent authentication={data.me} />;
};

export default withAuth;