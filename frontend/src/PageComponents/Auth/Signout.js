import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "shared/GraphQL/User";
import styled from "styled-components";
import tw from "tailwind.macro";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  let history = useHistory();

  const handleSignout = async (e) => {
    e.preventDefault();
    const result = await signout();
    if (result) history.push("/signin");
  };

  return <NavItem onClick={handleSignout}>Sign Out</NavItem>;
};

export default Signout;

const NavItem = styled.a`
${tw`no-underline border-b-2 border-transparent uppercase tracking-wide font-bold py-4`}
  color: ${(props) => props.theme.colors.textPrimary};
  &.${(props) => props.activeClassName} {
    border-bottom-color: ${(props) => props.theme.colors.textPrimary};
  }

  &:hover{
    border-bottom-color: ${(props) => props.theme.colors.textPrimary};
  }
`;
