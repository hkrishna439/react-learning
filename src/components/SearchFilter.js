import React, { useEffect, useState } from "react";
import { FETCH_DATA_API } from "../utils/constants";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const SearchFilter = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [resList, setResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_DATA_API);

    const json = await data.json();

    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="">
      <div className="m-4 p-4 flex justify-center">
        <input
          type="text"
          className="border border-solid border-black p-2 m-2 w-4/6"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-1 rounded-sm m-4 rounded-lg -ml-16"
          onClick={() => {
            setFilteredRestaurant(() => {
              return resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
            });
          }}
        >
          🔍
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-3/5 bg-gray-100">
          {filteredRestaurant &&
            filteredRestaurant.map((restaurant) => (
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
    </div>
  );
};

export default SearchFilter;
