import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_USER_QUERY } from "shared/GraphQL/User";
import { FullScreenSpinnerContainer } from "../styles";
import Loading from "shared/components/Spinner";

const withAuth = (BaseComponent) => ({ ...props }) => {
  const { data, loading } = useQuery(CURRENT_USER_QUERY);

  if (loading || !data.hasOwnProperty("me"))
    return (
      <FullScreenSpinnerContainer>
        <Loading /> Authenticating user...
      </FullScreenSpinnerContainer>
    );
  else return <BaseComponent authentication={data.me} />;
};

export default withAuth;
