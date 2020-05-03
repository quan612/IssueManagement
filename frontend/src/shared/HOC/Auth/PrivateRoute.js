import React from "react";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authentication, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authentication ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
