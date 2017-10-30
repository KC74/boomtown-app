import React from "react";
import PropTypes from "prop-types";
import { userinput, passwordinput } from "./textinput";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

// import ValidatedTextField from "../../components/ValidatedTextField";

import "./styles.css";
import logo from "../../images/boomtown-logo.svg";
import bottomLeft from "../../images/home-bl.svg";
import topRight from "../../images/home-tr.svg";

const Login = ({ login, isAuthed }) => (
  <div className="page login">
    <div className="logo">
      <img src={logo} alt="Boomtown Logo" />
    </div>
    <div className="topRight">
      <img src={topRight} alt="Sky" />
    </div>
    <div className="bottomLeft">
      <img src={bottomLeft} alt="City" />
    </div>
    <div className="cardContainer">
      <Paper zDepth={5}>
        <div className="formContainer">
          <form onSubmit={login} autoComplete="off">
            <div>
              <Field name="username" component={userinput} />
            </div>
            <div>
              <Field name="password" component={passwordinput} />
            </div>
            <RaisedButton
              className="enterButton"
              primary
              fullWidth
              type="submit"
            >
              <Link to="/" onClick={isAuthed}>
                Enter
              </Link>
            </RaisedButton>
          </form>
        </div>
      </Paper>
    </div>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
