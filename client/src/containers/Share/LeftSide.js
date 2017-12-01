import React from "react";
import PropTypes from "prop-types";
import { CardItem } from "../../components/ItemCard";
import moment from "moment";

const LeftSide = ({ itemowner, title, description, selectedTags }) => {
  const date = `${new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1)}`;
  return (
    <CardItem
      id="1"
      title={title ? title : "Amazing Item Title"}
      description={description ? description : "Profound item description."}
      createdon={date}
      imageurl={
        "http://www.carbuzz.com/resizeimg/imageshandler.ashx?w=640&h=480&url=http://db.carbuzz.com/images2/630000/9000/500/639589.jpg"
      }
      itemowner={itemowner}
      borrower={null}
      tags={selectedTags ? selectedTags : []}
      hideBorrowButton={true}
    />
  );
};

LeftSide.propTypes = {};

export default LeftSide;
