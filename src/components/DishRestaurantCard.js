import React from "react";
import { CDN_URL } from "../utils/constants";

const DishRestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 w-64 break-words rounded-2xl">
      <div className="flex flex-col justify-end relative">
        <div className="absolute text-white">
          <span className="font-bold text-xl p-2">
            {resData.aggregatedDiscountInfoV3 &&
              resData.aggregatedDiscountInfoV3.header}
          </span>
          <span className="font-bold text-xl p-2">
            {resData.aggregatedDiscountInfoV3 &&
              resData.aggregatedDiscountInfoV3.subHeader}
          </span>
        </div>

        <img
          className="rounded-2xl h-44 w-64 shadow-2xl "
          src={CDN_URL + resData.cloudinaryImageId}
          alt="res-log"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold ">{resData.name}</h3>
        <h4 className="flex items-center">
          <img
            src="https://logodix.com/logo/710623.png"
            alt=""
            className="w-4 h-4 mr-1"
          />
          {resData.avgRating} stars
        </h4>
        <h4 className="text-gray-500 truncate ">
          {resData.cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-500 truncate ">{resData.areaName}</h4>

        {/* <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4> */}
      </div>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

export default DishRestaurantCard;
