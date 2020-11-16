import React from "react";
import * as ROUTES from "App/Routes/index";
import Signout from "../Auth/Signout";
import { Container, HeaderItem } from "./styles";

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
