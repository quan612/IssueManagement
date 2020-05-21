import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import PrivateRoute from "shared/HOC/Auth/PrivateRoute";

import * as PAGES from "./pages";
import Header from "../PageComponents/Header/index";
import withAuth from "shared/HOC/Auth/withAuth";
import { Body } from "./styles";
import Toast from "shared/components/Toast";

export const SIGNUP = "/signup";
export const SIGNIN = "/signin";
export const RESETPASSWORD = "/reset";
export const HOME = "/";
export const PROJECTS = "/projects";
export const USERS = "/users";
export const FEEDS = "/feeds";
export const SINGLE_PROJECT = "/projects/:projectId";

const Routes = ({ authentication }) => {
  const location = useLocation();

  // const transitions = useTransition(location, (location) => location.pathname, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 1000, trail: 2000 },
  // });

  return (
    <>
      <Header authentication={authentication} />
      <Body
      // key={key} style={props}
      >
        <Switch location={location}>
          <Route path={SIGNUP} component={() => <PAGES.SIGNUP />} />
          <Route
            path={SIGNIN}
            component={() => <PAGES.SIGNIN authentication={authentication} />}
          />
          <Route path={RESETPASSWORD} component={PAGES.RESETPASSWORD} />

          <PrivateRoute
            authentication={authentication}
            exact
            path={USERS}
            component={() => (
              <PAGES.USERS
                authentication={authentication}
                location={location}
              />
            )}
          />

          <PrivateRoute
            authentication={authentication}
            path={SINGLE_PROJECT}
            component={PAGES.SINGLE_PROJECT}
          />

          <PrivateRoute
            authentication={authentication}
            exact
            path={PROJECTS}
            component={() => <PAGES.PROJECTS />}
          />

          <PrivateRoute
            authentication={authentication}
            exact
            path={FEEDS}
            component={() => <PAGES.FEEDS />}
            // component={() => FeedPage}
          />

          <PrivateRoute
            authentication={authentication}
            path={HOME}
            component={() => <Redirect to={PROJECTS} />}
          />

          {/* <Route component={PageError} />  */}
        </Switch>
        <Toast position={"bottom-right"} />
      </Body>
      {/* })} */}
    </>
  );
};

export default withAuth(Routes);
