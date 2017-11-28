import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../containers/Header/";
import { Route } from "react-router";
import "./styles.css";

import { ContentContainer } from "../../containers/Content/";
class Layout extends Component {
  render() {
    const { children } = this.props;

    Layout.propTypes = {
      children: PropTypes.node
    };

    return (
      <div className="appContentWrapper">
        <div className="appHeader">
          {/* Might want to put your header bar here... */}
          <Route exact path="/" component={Header} />
          <Route path="/profile/:id" component={Header} />
          <Route path="/share" component={Header} />
        </div>
        <div className="appContent">
          <ContentContainer>{children}</ContentContainer>
        </div>

        {/* And a footer here, but not on the login route... */}
      </div>
    );
  }
}

export default Layout;
