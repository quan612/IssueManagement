import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind.macro";
import { color } from "shared/utils/styles";

export const Container = styled.div`
  ${tw`bg-white px-8 shadow-md `}
  flex: 0 0 52px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const HeaderItem = styled(NavLink)`
  ${tw`no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 mr-8 hover:border-indigo-600`}
  &.${(props) => props.activeClassName} {
    border-bottom-color: ${color.primary};   
  }  
`;
