import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as PAGES from "./pages";
import Header from "../PageComponents/Header";

export const LOGIN = "/login";
export const DASHBOARD = "/";
export const PROJECTS = "/projects";
export const USERS = "/plans";
export const FEEDS = "/feeds";
export const SINGLE_PROJECT = "/projects/:projectId";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={DASHBOARD} component={PAGES.DASHBOARD} />
        <Route exact path={PROJECTS} render={() => <PAGES.PROJECTS />} />
        <Route path={USERS} render={() => <PAGES.USERS />} />
        <Route path={SINGLE_PROJECT} component={SINGLE_PROJECT} />
        <Route path={LOGIN} component={PAGES.LOGIN} />
        {/* <Route component={PageError} />  */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
