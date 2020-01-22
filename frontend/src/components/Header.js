import React from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind.macro";
import styled from "styled-components";

import * as ROUTES from "../routes";

const NavContainer = styled.nav`
  ${tw`bg-white px-8 pt-2 shadow-md`}
`;

const NavBody = styled.div`
  ${tw`mb-1 flex justify-center`}
  > a {
    ${tw`no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8`}
  }

  .active {
    ${tw`border-indigo-600`}
  }
`;

const Header = () => (
  <NavContainer>
    <NavBody>
      <NavLink to={ROUTES.DASHBOARD} exact>
        Dashboard
      </NavLink>

      <NavLink to={ROUTES.PROJECTS} exact>
        Projects
      </NavLink>

      <NavLink to={ROUTES.USERS} exact>
        Users
      </NavLink>

      <NavLink to={ROUTES.FEEDS} exact>
        Feeds
      </NavLink>
    </NavBody>
  </NavContainer>
);

export default Header;
