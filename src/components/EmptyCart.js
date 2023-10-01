import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="mx-72 my-40 flex flex-col  items-center justify-between">
      <img
        className="w-72 h-72 "
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt=""
      />
      <h1 className="font-bold text-xl mt-6">Your cart is empty</h1>
      <p className="text-gray-400 m-2">
        You can go to home page to view more restaurant
      </p>
      <Link
        to="/"
        className="bg-red-300 px-4 py-3 m-6 text-center font-bold cursor-pointer"
      >
        SEE RESTAURANTS NEAR YOU
      </Link>
    </div>
  );
};

export default EmptyCart;
