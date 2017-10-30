import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

import { ItemGrid } from "../containers/ItemGrid/";
import { ProfileContainer } from "../containers/Profile";
import { NotFound } from "../containers/NotFound/";
import PrivateRoute from "../components/PrivateRoute/";
import Login from "../containers/Login/";

class Routes extends Component {
  render() {
    console.log("Routes:", this.props);
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={ItemGrid} />
        <PrivateRoute path="/profile/:id" component={ProfileContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

// export default Routes
export default connect(store => store.auth)(Routes);
