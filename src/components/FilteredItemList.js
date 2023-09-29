import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import addItem from "../utils/cartSlice";

const FilteredItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="flex justify-between p-4 m-3 border-b-2 text-left">
      <div className="w-9/12">
        <div className="flex flex-col py-2">
          <span className="font-bold">{item.card.info.name} </span>
          <span className="">₹{item.card.info.price / 100}</span>
        </div>
        <p className="text-xs">{item.card.info.description}</p>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="absolute">
          <button
            className="px-6 py-2 bg-white text-green-400 shadow-lg font-bold mt-20 rounded-lg"
            onClick={() => handleAddItem(item)}
          >
            ADD+
          </button>
        </div>
        <img
          src={CDN_URL + item.card.info.imageId}
          className="rounded-lg w-full h-28"
        />
      </div>
    </div>
  );
};

export default FilteredItemList;
