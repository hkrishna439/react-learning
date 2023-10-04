import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DishCard from "./DishCard";
import { Link } from "react-router-dom";

const OnYourMind = () => {
  const resInfo = useSelector((store) => store.resInfo.resInfo[1]);
  const dishList = resInfo?.card?.card?.gridElements?.infoWithStyle?.info;
  return (
    <div>
      <h1 className="font-bold text-2xl ml-8">
        {resInfo?.card?.card?.header?.title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex m-6">
          {dishList &&
            dishList.map((dish) => (
              <Link
                to={"/" + dish.action.link.slice(23, dish.action.link.length)}
                key={dish.imageId}
              >
                <DishCard dishInfo={dish} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnYourMind;
