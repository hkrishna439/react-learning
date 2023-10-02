import React, { useEffect, useState } from "react";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router-dom";
import OnYourMind from "./OnYourMind";
import { FETCH_DATA_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { storeInfo } from "../utils/infoSlice";
import BestOffers from "./BestOffers";
import Footer from "./Footer";

const Body = () => {
  const dispatch = useDispatch();
  const [resList, setResList] = useState([]);

  const [onlineRestaurant, setOnlineRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-reneder the component)

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect called on initial render(just once)
  // If dependency array id [filteredRestaurant] => useEffect called every time the filteredRestaurant changed

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_DATA_API);

    const json = await data.json();

    dispatch(storeInfo(json?.data?.cards));
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setOnlineRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const setResListListner = () => {
  //   setFilteredRestaurant(() => {
  //     return filteredRestaurant.filter(
  //       (restaurant) => restaurant.info.avgRating >= 4.3
  //     );
  //   });
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }
  return resList && resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mx-32 my-6">
        {/* <div className="flex">
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
            onClick={setResListListner}
          >
            Top Rated Restaurants
          </button>
        </div>
        </div> */}
        <BestOffers />
        <OnYourMind />
        <hr className="p-6 m-6" />
        <h1 className="font-bold text-2xl mb-6 ml-8">
          Top restaurant chains in Bangalore
        </h1>
        <div className="flex justify-center overflow-x-scroll">
          {resList &&
            resList.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.promoted === true ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
        </div>
        <hr className="p-6 m-6" />
        <h1 className="font-bold text-2xl mb-6 ml-8">
          Restaurants with online food delivery in Bangalore
        </h1>
        <div className="flex justify-center flex-wrap">
          {onlineRestaurant &&
            onlineRestaurant.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.promoted === true ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Body;
