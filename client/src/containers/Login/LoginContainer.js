import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

import Login from "./Login";
import * as firebase from 'firebase'

class LoginContainer extends Component {

  // static propTypes = {
  // };

  handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = this.props.user;

    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      return console.log(errorCode, errorMessage);
    }
  };

  render() {
    return <Login login={this.handleSubmit} />;
  }
}

const loginForm = reduxForm({
    form: "loginForm",
  })(LoginContainer);
  
  function mapStateToProps(state) {
    const values = formValueSelector("loginForm");
    return {
      user: values(state, "username", "password")
    };
  }
  
  export default connect(mapStateToProps)(loginForm);
