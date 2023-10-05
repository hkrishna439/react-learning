import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import EmptyCart from "./EmptyCart";
import Shimmer from "./Shimmer";

const Cart = () => {
  // Make sure you are subscribing to the right portion of the store - here you can optimize the performance
  const cartStore = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const resInfo = useRestaurantMenu(cartStore.resId);

  if (!resInfo) {
    return cartStore.items.length === 0 ? <EmptyCart /> : <Shimmer />;
  }

  const { name, cloudinaryImageId, areaName } =
    resInfo && resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      {cartStore.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex p-4 w-11/12">
          {/* <h1 className="text-xl font-bold"> Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add Items to the cart</h1>
        )}
     </div>
       */}

          <div className="w-3/4 h-3/4 m-4 p-4 shadow-lg bg-white ">
            <h1 className="font-bold text-lg m-2 p-2">
              Choose a adelivery address
            </h1>
            <div className="m-6 p-6 border border-gray-300 flex flex-col justify-start">
              <h1 className="font-bold text-lg m-2 p-2">🏠 Home</h1>
              <p className="m-2 p-2">
                16, 4th cross, shanthi layout, ramamurthy nagar, bengalore
                560016
                <button className="p-2 my-4 bg-green-300 block font-bold">
                  DELIVER HERE
                </button>
              </p>
            </div>
          </div>
          <div className="shadow-lg m-4 p-4 w-3/6 h-4/5 max-h-screen bg-white flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="h-14 w-14 shadow-2xl m-4"
                  src={CDN_URL + cloudinaryImageId}
                  alt="res-log"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-gray-400">{areaName}</p>
                </div>
              </div>
              <div>
                <button
                  className="p-2 m-2 bg-red-400 text-white rounded-lg w-36"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="my-2 h-4/5 overflow-y-scroll">
              {cartStore.items.map((cartItem) => (
                <ItemCard
                  cartItem={cartItem}
                  key={cartItem?.item?.card?.info?.id}
                />
              ))}
            </div>
            <hr className="border border-solid border-black h-1 bg-black" />

            <div className="my-2 mr-4 font-bold flex justify-between">
              <span>TO PAY</span>
              <span>₹{cartStore.totalAmount}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
