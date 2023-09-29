import React from "react";
import { CDN_URL } from "../utils/constants";

const DishCard = ({ dishInfo }) => {
  return (
    <div className="m-2 w-24">
      <img
        src={CDN_URL + dishInfo.imageId}
        alt={dishInfo?.accessibility?.altText}
      />
    </div>
  );
};

export default DishCard;
