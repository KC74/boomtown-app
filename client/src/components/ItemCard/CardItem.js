import React, { Component } from "react";
import Gravatar from "react-gravatar";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui";
import BoomButton from "../../components/Buttons/Buttons";
import moment from "moment";
import { Link } from "react-router-dom";

class CardItem extends Component {
  render() {
    const {
      id,
      title,
      description,
      createdon,
      imageurl,
      itemowner,
      borrower,
      tags,
      hideBorrowButton
    } = this.props;

    return (
      <div
        className="card-wrapper"
        key={id}
        style={{ width: "33%", padding: "1%", margin: " 0 0.17%" }}
      >
        <Card className="card-item">
          <CardMedia
            overlay={
              borrower !== null ? (
                <CardTitle
                  subtitle="Unavailable"
                  style={{ position: "relative" }}
                />
              ) : null
            }
          >
            <img src={imageurl} alt="" />
          </CardMedia>
          <CardHeader
            title={
              <Link key={itemowner.id} to={`/profile/${itemowner.id}`}>
                {itemowner.fullname}
              </Link>
            }
            subtitle={moment(createdon).fromNow()}
            avatar={
              <Gravatar
                style={{ borderRadius: "50%" }}
                email={itemowner.email}
              />
            }
          />
          <CardTitle
            title={title}
            subtitle={tags.map((tag, index, arr) => {
              return index !== arr.length - 1
                ? `${tag.title || tag}, `
                : `${tag.title || tag}`;
            })}
          />
          <CardText>{description}</CardText>
          <CardActions>
            {!borrower ? (
              <BoomButton
                label="Borrow"
                bgcolor="rgb(38, 50, 56)"
                styles={
                  hideBorrowButton ? { display: "none" } : { marginLeft: "0" }
                }
              />
            ) : null}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardItem;
