import React from "react";
import { CDN_URL, CDN_URL_GENERIC } from "../utils/constants";
import { off } from "process";

const RestaurantOfferCard = ({ offer }) => {
  return (
    <div className="flex flex-col border border-gray-300 m-4 p-4 rounded-lg w-3/4">
      <div className="flex font-bold text-xl">
        <div className="mr-4">
          {offer?.info?.offerLogo === "offers/generic" ? (
            <img src={CDN_URL_GENERIC} alt="" />
          ) : (
            <img
              src={CDN_URL + offer?.info?.offerLogo}
              alt=""
              className="w-8 h-8"
            />
          )}
        </div>
        <h1>{offer?.info?.header}</h1>
      </div>
      <div>
        <p>
          {offer?.info?.couponCode}|{offer?.info?.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantOfferCard;
