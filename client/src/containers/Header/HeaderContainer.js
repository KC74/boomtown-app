import React, { Component } from "react";
import Header from "../Header/Header";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class HeaderContainer extends Component {
  _normalizeTags(tags) {
    return (
      tags !== undefined &&
      tags.reduce((acc, cur) => {
        acc.push(cur.title);
        return acc;
      }, [])
    );
  }

  render() {
    const { tags } = this.props.data;
    return (
      <div className="header-container">
        <Header tags={this._normalizeTags(tags)} />
      </div>
    );
  }
}

const fetchCardData = gql`
  query {
    tags {
      title
      tagsid
    }
  }
`;

export default graphql(fetchCardData)(HeaderContainer);
