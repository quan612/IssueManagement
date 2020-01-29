import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../App/routes";

// const NavContainer = styled.nav`
//   ${tw`bg-white px-8 pt-2 shadow-md`}
// `;

// const NavBody = styled.div`
//   ${tw`mb-1 flex justify-center`}
//   > a {
//     ${tw`no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8`}
//   }

//   .active {
//     ${tw`border-indigo-600`}
//   }
// `;

const style = {
  a:
    "no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
};

const Header = () => (
  <div className="bg-white px-8 pt-2 shadow-md">
    <div className="mb-1 flex justify-center">
      <NavLink
        to={ROUTES.DASHBOARD}
        exact
        activeClassName="border-indigo-600"
        className="no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
      >
        Dashboard
      </NavLink>

      <NavLink
        to={ROUTES.PROJECTS}
        exact
        activeClassName="border-indigo-600"
        className="no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
      >
        Projects
      </NavLink>

      <NavLink
        to={ROUTES.USERS}
        exact
        activeClassName="border-indigo-600"
        className="no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
      >
        Users
      </NavLink>

      <NavLink
        to={ROUTES.FEEDS}
        exact
        activeClassName="border-indigo-600"
        className="no-underline text-indigo-600 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
      >
        Feeds
      </NavLink>
    </div>
  </div>
);

export default Header;
