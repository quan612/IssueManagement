import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import PrivateRoute from "shared/HOC/Auth/PrivateRoute";

import * as PAGES from "./pages";
import Header from "../PageComponents/Header/index";
import withAuth from "shared/HOC/Auth/withAuth";
import { useTransition } from "react-spring";
import { Container } from "./style";
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
  let history = useHistory();
  const { location } = history;

  const transitions = useTransition(location, (location) => location.pathname, {
    // from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    // enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    // leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // config: { duration: 400 },
  });

  return (
    <>
      <Header authentication={authentication} />
      {/* {transitions.map(({ item, props, key }) => ( */}
      <Container
      // key={key}
      // style={{
      //   opacity: props.opacity.interpolate(
      //     [0, 0.5, 1, 1.5, 2],
      //     [0, 0, 1, 0, 0]
      //   ),
      // }}
      // style={props}
      >
        <Switch
        // location={item}
        >
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
            component={() => <PAGES.USERS authentication={authentication} />}
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
            path={HOME}
            component={() => <Redirect to={PROJECTS} />}
          />

          {/* <Route component={PageError} />  */}
        </Switch>
        <Toast position={"bottom-right"} />
      </Container>
      {/* ))} */}
    </>
  );
};

export default withAuth(Routes);
