import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.header`
  flex: 0 0 52px;
  position: fixed;
  width: 100%;
  z-index: 900;
  background: inherit;
`;

export const HeaderItem = styled(NavLink)`
  ${tw`no-underline border-b-2 border-transparent uppercase tracking-wide font-bold  py-4 mr-8`}

  color: ${(props) => props.theme.colors.textPrimary};

  &.${(props) => props.activeClassName} {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
