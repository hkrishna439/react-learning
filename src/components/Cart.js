import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const Cart = () => {
  // Make sure you are subscribing to the right portion of the store - here you can optimize the performance
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      {cartItems.length === 0 ? (
        <div className="m-72 flex flex-col  items-center justify-between">
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

          <div className="w-3/4 h-2/4 m-4 p-4 shadow-lg bg-white">Payment</div>
          <div className="shadow-lg m-4 p-4 w-1/3 h-4/5 bg-white flex flex-col justify-between">
            <div className="">Restaurant</div>
            <div className="my-2 h-4/5 overflow-y-scroll">
              {cartItems.map((cartItem) => (
                <ItemCard cartItem={cartItem} key={cartItem?.card?.info?.id} />
              ))}
            </div>
            <hr className="border border-solid border-black h-1 bg-black" />

            <div className="my-2 font-bold flex justify-between">
              <span>TO PAY</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
