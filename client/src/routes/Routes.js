import React from "react";
import { Switch, Route } from "react-router";

import { ItemGrid } from "../containers/ItemGrid/";
import { ProfileContainer } from "../containers/Profile";
import { NotFound } from "../containers/NotFound/";
import PrivateRoute from "../components/PrivateRoute/";
import Login from "../containers/Login/";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={ItemGrid} />
      <PrivateRoute path="/profile/:id" component={ProfileContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
