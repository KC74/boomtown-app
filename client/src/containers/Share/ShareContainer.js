import React, { Component } from "react";
import PropTypes from "prop-types";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./styles.css";

class ShareContainer extends Component {
  render() {
    return (
      <div className="share-container">
        <LeftSide />
        <RightSide />
      </div>
    );
  }
}

ShareContainer.propTypes = {};

export default ShareContainer;
