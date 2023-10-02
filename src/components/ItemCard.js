import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../utils/cartSlice";

const ItemCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center ">
      <div className="flex py-2 w-2/4 items-center">
        <div className="w-3 h-3 bg-white border mr-3 border-green-600 flex justify-center items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        </div>
        <span>{cartItem?.item?.card?.info?.name}</span>
      </div>
      <div className="flex justify-between border border-black py-1 m-6 w-1/4 cursor-pointer">
        <span
          className="text-xl text-gray-500 w-full flex justify-center"
          onClick={() => {
            dispatch(removeItem(cartItem?.item?.card?.info?.id));
          }}
        >
          -
        </span>
        <span className="text-xl text-green-500 w-full flex justify-center">
          {cartItem?.amount}
        </span>
        <span
          className="text-xl text-green-500 w-full flex justify-center"
          onClick={() => {
            dispatch(addItem(cartItem));
          }}
        >
          +
        </span>
      </div>
      <div className="mr-6">
        ₹
        {cartItem?.item?.card?.info?.price
          ? cartItem?.item?.card?.info?.price / 100
          : cartItem?.item.card?.info?.defaultPrice / 100}
      </div>
    </div>
  );
};

export default ItemCard;
