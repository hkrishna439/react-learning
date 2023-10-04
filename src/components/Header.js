import React, { useContext, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO from "../utils/images/SNAP_MEAL.png";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector

  const cartItems = useSelector((store) => store.cart.items);

  const cartLength = cartItems.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );
  return (
    <div className="flex justify-between shadow-lg sticky top-0 bg-white z-10">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 ml-6" src={LOGO} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-stretch ">
          <li className="px-6 text-gray-600 h-24 flex items-center cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <Link to="/search">
            <li className="px-6 text-gray-700 hover:text-red-400 h-24 flex items-center cursor-pointer">
              🔍 Search
            </li>
          </Link>
          <Link to="/">
            <li className="px-6 text-gray-700 hover:text-red-400 h-24 flex items-center cursor-pointer">
              Home
            </li>
          </Link>
          {/* <Link to="/about">
            <li className="px-4 font-bold text-gray-600 hover:text-red-400 h-24 flex items-center cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-4 font-bold text-gray-600 hover:text-red-400 h-24 flex items-center cursor-pointer">
              Contact Us
            </li>
          </Link> */}
          {/* <Link to="/grocerry">
            {" "}
            <li className="px-6 text-gray-700 hover:text-red-400 h-24 flex items-center cursor-pointer">
              Grocerry
            </li>
          </Link> */}
          <Link to="/cart">
            <li className="px-6 text-gray-700 hover:text-red-400 h-24 flex items-center cursor-pointer">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-red-400 text-white m-2">
                {cartLength}
              </span>
              <span>Cart</span>
            </li>
          </Link>
          <button
            className="login hover:text-red-400 mr-4 text-gray-700"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
          {/* <li className="px-4 hover:text-red-400">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
