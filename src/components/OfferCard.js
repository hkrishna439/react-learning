import React from "react";
import { CDN_URL } from "../utils/constants";

const OfferCard = ({ offerInfo }) => {
  return (
    <div className="m-2 w-96">
      <img src={CDN_URL + offerInfo.imageId} alt="" className="" />
    </div>
  );
};

export default OfferCard;
