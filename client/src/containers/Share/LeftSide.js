import React from "react";
import PropTypes from "prop-types";
import { CardItem } from "../../components/ItemCard";

const LeftSide = ({ itemowner, title, description, selectedTags }) => {
  console.log(selectedTags);
  return (
    <CardItem
      id="1"
      title={title ? title : "Amazing Item Title"}
      description={description ? description : "Profound item description."}
      createdon={Date.now(Date.UTC())}
      imageurl={
        "http://www.carbuzz.com/resizeimg/imageshandler.ashx?w=640&h=480&url=http://db.carbuzz.com/images2/630000/9000/500/639589.jpg"
      }
      itemowner={itemowner}
      borrower={null}
      tags={selectedTags ? selectedTags : []}
    />
  );
};

LeftSide.propTypes = {};

export default LeftSide;
