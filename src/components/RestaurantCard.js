import React, { useContext } from "react";

import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData.info;
  // const { header, subHeader } = resData.info.aggregatedDiscountInfoV3;
  return (
    <div className="m-4 w-64 break-words rounded-2xl">
      <div className="flex flex-col justify-end ">
        <div className="absolute text-white ">
          <span className="font-bold text-xl p-2">
            {resData.info.aggregatedDiscountInfoV3 &&
              resData.info.aggregatedDiscountInfoV3.header}
          </span>
          <span className="font-bold text-xl p-2">
            {resData.info.aggregatedDiscountInfoV3 &&
              resData.info.aggregatedDiscountInfoV3.subHeader}
          </span>
        </div>

        <img
          className="rounded-2xl h-44 w-64 shadow-2xl "
          src={CDN_URL + cloudinaryImageId}
          alt="res-log"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold ">{name}</h3>
        <h4 className="flex items-center">
          <img
            src="https://logodix.com/logo/710623.png"
            alt=""
            className="w-4 h-4 mr-1"
          />
          {avgRating} stars
        </h4>
        <h4 className="text-gray-500 truncate ">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-500 truncate ">{areaName}</h4>

        {/* <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4> */}
      </div>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

// Higher Order Component
// Input - RestaurantCard ==> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
