import React from "react";

const ItemCard = ({ cartItem }) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex py-2 w-2/4 items-center">
        <div className="w-3 h-3 bg-white border mr-3 border-green-600 flex justify-center items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        </div>
        <span>{cartItem?.card?.info?.name}</span>
      </div>
      <div className="flex justify-between border border-black py-1 px-4 w-1/4 m-6 cursor-pointer">
        <span
          className="text-xl text-gray-500"
          onClick={() => console.log(cartItem?.card?.info?.name)}
        >
          -
        </span>
        <span className="text-xl text-green-500">1</span>
        <span className="text-xl text-green-500">+</span>
      </div>
      <div className="mr-6">
        ₹
        {cartItem?.card?.info?.price
          ? cartItem?.card?.info?.price / 100
          : cartItem?.card?.info?.defaultPrice / 100}
      </div>
    </div>
  );
};

export default ItemCard;
