import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import { compose } from "redux";
import { setTags, setSelectedTagsSuccess } from "../../redux/modules/tags";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./styles.css";

class ShareContainer extends Component {
  _handleChange = (event, index, values) => {
    this.props.dispatch(setSelectedTagsSuccess(values));
  };

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
    console.log(this.props);
    const { user, tags } = this.props.data;
    const { shareForm, selectedTags } = this.props;

    return (
      <div className="share-container">
        {user !== undefined ? (
          <LeftSide
            itemowner={user}
            {...shareForm}
            selectedTags={selectedTags}
          />
        ) : (
          "loading..."
        )}
        <RightSide
          tags={this._normalizeTags(tags)}
          handleChange={this._handleChange}
          selectedTags={selectedTags}
        />
      </div>
    );
  }
}

ShareContainer.propTypes = {};

const fetchCardData = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      fullname
      email
    }
    tags {
      title
      tagsid
    }
  }
`;

function mapStateToProps(state) {
  const values = formValueSelector("shareForm");
  return {
    shareForm: values(state, "title", "description"),
    selectedTags: state.tags.selectedTags
  };
}

const composer = compose(
  graphql(fetchCardData, {
    options: ownProps => ({
      variables: {
        id: "k721A4pRNggCx7b6ryEE8vx1VIi1"
      }
    })
  })
)(ShareContainer);

export default connect(mapStateToProps)(composer);
