import React, { Component } from "react";
import { CardItem } from "../../components/ItemCard/";
import Masonry from "react-masonry-component";
import CircularProgress from "material-ui/CircularProgress";
import Paper from "material-ui/Paper";
import Gravatar from "react-gravatar";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "./styles.css";

class ProfileContainer extends Component {
  render() {
    const paperStyle = {
      width: "100%",
      margin: "1.5rem auto 1rem",
      display: "inline-block"
    };

    const { user } = this.props.data;
    const { loading } = this.props;

    if (loading) {
      return (
        <div
          className="loadingIcon"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <CircularProgress size={80} thickness={5} />
        </div>
      );
    } else if (user !== undefined) {
      return (
        <div className="card-item-grid" style={{ width: "100%" }}>
          <div
            className="paper-wrapper"
            style={{ width: "75%", margin: "0 auto" }}
          >
            <Paper style={paperStyle} zDepth={1}>
              <div className="paper-container">
                <div className="paper-left-container">
                  <h1>{user.fullname}</h1>
                  <p>{user.bio}</p>
                </div>
                <div className="paper-right-container">
                  <div className="item-sharing-wrapper">
                    <span className="items-shared-counter">
                      {user.owneditems.length}
                    </span>
                    <span className="items-shared">Items shared</span>
                    <span className="items-borrowed-counter">
                      {user.borroweditems.length}
                    </span>
                    <span className="items-borrowed">Items borrowed</span>
                  </div>
                  <div className="profile-gravatar">
                    <Gravatar
                      style={{ borderRadius: "50%" }}
                      size={180}
                      email={user.email}
                    />
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <Masonry
            className="masonry-component"
            enableResizableChildren={false}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {user.owneditems.map(item => {
              return (
                <CardItem key={(Math.random() * 1000).toFixed(2)} {...item} />
              );
            })}
          </Masonry>
        </div>
      );
    }
    return null;
  }
}

const fetchCardData = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      fullname
      bio
      email
      owneditems {
        id
        title
        description
        imageurl
        itemowner {
          id
          fullname
        }
        createdon
      }
      borroweditems {
        id
      }
    }
  }
`;

export default graphql(fetchCardData, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id // e.g. from React Router!
    }
  })
})(ProfileContainer);
