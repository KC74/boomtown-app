import React, { Component } from "react";
import ItemData from "../ItemData";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

class ItemGrid extends Component {
  render() {
    const styles = {
      width: "100%"
    };

    const style2 = {
      marginRight: 20,
      position: "fixed",
      bottom: "1rem",
      right: 0
    };

    const { items, loading } = this.props.data;

    return (
      <div className="card-item-grid" style={styles}>
        <ItemData cardsData={items} loading={loading} />
        <FloatingActionButton
          style={style2}
          backgroundColor="#000"
          iconStyle={{ color: "#fff" }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

const fetchCardData = gql`
  query {
    items {
      id
      title
      description
      imageurl
      itemowner {
        id
        fullname
        bio
        email
        borroweditems {
          id
          title
        }
      }
      createdon
      borrower {
        id
        fullname
      }
    }
  }
`;

ItemGrid.PropTypes = {
  data: PropTypes.shape({
    cardsData: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  })
};

const auth = connect(store => store.auth)(ItemGrid);
export default graphql(fetchCardData)(auth);
