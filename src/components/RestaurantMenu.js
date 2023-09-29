import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantOfferCard from "./RestaurantOfferCard";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const { resId } = useParams();
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  const deliveryTime = resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime;
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const offers =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="text-gray-400">{cuisines.join(", ")}</p>
        <p className="text-gray-400 mb-8">{areaName}</p>
        <hr className="m-4"></hr>
      </div>
      <div className="flex flex-col p-4">
        <p className="font-bold text-lg">
          {deliveryTime} MINS {costForTwoMessage}
        </p>
        <div className="flex overflow-x-scroll">
          {offers.map(
            (offer) =>
              offer?.info?.couponCode && (
                <RestaurantOfferCard offer={offer} key={Math.random()} />
              )
          )}
        </div>
      </div>

      <div className="flex items-center transition-all ">
        <p className="mr-2 p-4 font-bold text-xl">Veg Only </p>

        {!isVeg ? (
          <div
            className="w-14 h-7 bg-gray-300 cursor-pointer border border-black rounded-md flex items-center justify-start"
            onClick={() => {
              setIsVeg(!isVeg);
            }}
          >
            <div className="w-6 h-6 bg-white rounded-md ml-[3px]"></div>
          </div>
        ) : (
          <div
            className="w-14 h-7 bg-green-700 cursor-pointer border border-black rounded-md flex items-center justify-end"
            onClick={() => {
              setIsVeg(!isVeg);
            }}
          >
            <div className="w-6 h-6 bg-white rounded-md ml-[3px] flex justify-center items-center">
              <div className="w-4 h-4 rounded-full bg-green-700"></div>
            </div>
          </div>
        )}
      </div>
      <div className="">
        {/* categories accordions */}
        {categories.map((category, index) => (
          // Cotrolled component
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex && true}
            isVeg={isVeg}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
        {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."} {item.card.info.price / 100}. {"00"}
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
