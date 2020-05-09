import React from "react";

import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "shared/GraphQL/User";

import { useHistory } from "react-router-dom";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout, { loading, error }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  let history = useHistory();

  const handleSignout = async (e) => {
    e.preventDefault();
    const result = await signout();
    // ISSUE HERE
    if (result) history.push("/signin");
  };

  return (
    <a
      href="/#"
      className="no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 mr-8 hover:border-indigo-600"
      onClick={handleSignout}
    >
      Sign Out
    </a>
  );
};

export default Signout;
