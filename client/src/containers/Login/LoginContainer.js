import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
// import { login } from "../../redux/modules/firebase";
// import PropTypes from 'prop-types';

import Login from "./Login";
import * as firebase from "firebase";

class LoginContainer extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    const { username, password } = this.props.user;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(username, password);
      return user;
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      return console.log(errorCode, errorMessage);
    }
  };

  render() {
    return <Login login={this.handleSubmit} {...this.props} />;
  }
}

const loginForm = reduxForm({
  form: "loginForm"
})(LoginContainer);

function mapStateToProps(state) {
  const values = formValueSelector("loginForm");
  return {
    user: values(state, "username", "password")
  };
}

export default connect(mapStateToProps)(loginForm);
