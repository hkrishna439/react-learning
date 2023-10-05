import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FETCH_DATA_BY_DISH } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const RestaurantsListByDish = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resListFilteredByDish, setResListFilteredByDish] = useState([]);
  const [heading, setHeading] = useState([]);
  const collectionId = searchParams.get("collection_id");
  const tags = searchParams.get("tags");
  const type = searchParams.get("type");

  useEffect(() => {
    fetchDataByDish();
  }, []);

  const fetchDataByDish = async () => {
    const data = await fetch(
      FETCH_DATA_BY_DISH +
        "&collection=" +
        collectionId +
        "&tags=" +
        tags +
        "&type=" +
        type
    );
    const json = await data.json();

    setResListFilteredByDish(
      json.data.cards.filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
    );
    setHeading(json.data.cards[0]);
  };

  let title,
    description = null;
  if (heading.length !== 0) {
    title = heading.card.card.title;
    description = heading.card.card.description;
  }
  return (
    <div className="my-6 py-6 mx-14 px-14">
      <h1 className="font-bold text-3xl my-2">{title}</h1>
      <p className="text-gray-500 mb-6">{description}</p>

      <div className="flex flex-wrap">
        {resListFilteredByDish.length !== 0 &&
          resListFilteredByDish.map((res) => (
            <Link
              to={"/restaurants/" + res.card.card.info.id}
              key={res.card.card.info.id}
            >
              <RestaurantCard resData={res.card.card} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RestaurantsListByDish;
