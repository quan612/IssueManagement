import React from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../App/routes";

import Signout from "../Auth/Signout";
import { Container, HeaderItem } from "./style";

const Header = ({ authentication }) => (
  <Container>
    <div className="w-full mb-1 flex justify-center">
      {authentication ? (
        <>
          <HeaderItem to={ROUTES.PROJECTS} activeClassName="true">
            Projects
          </HeaderItem>
          <HeaderItem to={ROUTES.USERS} activeClassName="true">
            User
          </HeaderItem>
          <HeaderItem to={ROUTES.FEEDS} activeClassName="true">
            Feeds
          </HeaderItem>
          <Signout />
        </>
      ) : (
        // console.log(data);

        <>
          <HeaderItem to={ROUTES.SIGNUP} activeClassName="true">
            Sign Up
          </HeaderItem>
          <HeaderItem to={ROUTES.SIGNIN} activeClassName="true">
            Sign In
          </HeaderItem>
        </>
      )}
    </div>
  </Container>
);

export default Header;
