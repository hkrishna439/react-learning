import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantOfferCard from "./RestaurantOfferCard";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const { resId } = useParams();
  //Custom Hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [isConflictItemAddedToCart, setIsConflictItemAddedToCart] =
    useState(true);
  const [isItemAddedToCart, setIsItemAddedToCart] = useState(false);
  const [itemToAddToCart, setItemToAddToCart] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);

  const cartLength = cart.items.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );
  const totalAmount = cart.totalAmount;
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  const deliveryTime = resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime;
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const offers =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const showConflictPopup = (resId, resIdFromStore) => {
    if (resId === resIdFromStore || resIdFromStore === null) {
      setIsConflictItemAddedToCart(true);
    } else {
      setIsConflictItemAddedToCart(false);
    }
  };

  const showItemAddToCartPopup = () => {
    setIsItemAddedToCart(true);
  };
  const setItemHandler = (item) => {
    setItemToAddToCart(item);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="flex flex-col w-3/5">
          <div className="flex flex-col p-4">
            <h1 className="font-semibold my-6 text-2xl">{name}</h1>
            <p className="text-gray-400">{cuisines.join(", ")}</p>
            <p className="text-gray-400 mb-8">{areaName}</p>
            <hr className=""></hr>
          </div>
          <div className="p-4">
            <p className="font-bold text-sm flex items-center">
              <img
                className="w-4 h-4 m-2"
                src="https://www.shareicon.net/data/512x512/2015/10/18/658125_clock_512x512.png"
              />
              {deliveryTime}
              <span className="mr-2">MINS</span>
              <img
                className="w-4 h-4 m-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Indian_Rupee_symbol_in_circle_PD_version.svg/1200px-Indian_Rupee_symbol_in_circle_PD_version.svg.png"
              />
              {costForTwoMessage}
            </p>
            <div className="flex overflow-x-scroll">
              <div className="flex">
                {offers &&
                  offers.map(
                    (offer) =>
                      offer?.info?.couponCode && (
                        <RestaurantOfferCard
                          offer={offer}
                          key={Math.random()}
                        />
                      )
                  )}
              </div>
            </div>
          </div>

          <div className="flex items-center transition-all mb-4">
            <p className="mr-2 px-4 font-semibold text-xl">Veg Only </p>
            {!isVeg ? (
              <div
                className="w-12 h-6 bg-gray-300 cursor-pointer border border-black rounded-md flex items-center justify-start"
                onClick={() => {
                  setIsVeg(!isVeg);
                }}
              >
                <div className="w-5 h-5 bg-white rounded-md ml-[3px]"></div>
              </div>
            ) : (
              <div
                className="w-12 h-6 bg-green-700 cursor-pointer border border-black rounded-md flex items-center justify-end"
                onClick={() => {
                  setIsVeg(!isVeg);
                }}
              >
                <div className="w-5 h-5 bg-white rounded-md ml-[3px] flex justify-center items-center">
                  <div className="w-3 h-3 rounded-full bg-green-700"></div>
                </div>
              </div>
            )}
          </div>
          <hr className=""></hr>
          <div className="">
            {/* categories accordions */}
            {categories &&
              categories.map((category, index) => (
                // Cotrolled component
                <RestaurantCategory
                  data={category?.card?.card}
                  key={category?.card?.card?.title}
                  showItems={index === showIndex && true}
                  isVeg={isVeg}
                  resId={resId}
                  showConflictPopup={showConflictPopup}
                  showItemAddToCartPopup={showItemAddToCartPopup}
                  setItemHandler={setItemHandler}
                  setShowIndex={() => {
                    setShowIndex(index);
                  }}
                />
              ))}
            {/* <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."} {item.card.info.price / 100}. {"00"}
            </li>
          ))}
        </ul> */}
          </div>
        </div>
      </div>

      {!isConflictItemAddedToCart && (
        <div className="p-6 m-6 w-2/5 bg-white fixed top-2/3 left-1/4 ml-24 shadow-2xl">
          <h1 className="font-bold my-2">Items already in cart</h1>
          <p className="my-2 text-gray-600">
            Your cart contains items from other restaurant. Would you like to
            reset your cart for adding items from this restaurant ?
          </p>
          <div className="flex">
            <button
              className="border border-green-400 m-2 p-2 w-48 font-bold text-green-400"
              onClick={() => setIsConflictItemAddedToCart(true)}
            >
              NO
            </button>
            <button
              className="border border-green-400 m-2 p-2 w-48 font-bold bg-green-400 text-white"
              onClick={() => {
                setIsConflictItemAddedToCart(true);
                if (!isConflictItemAddedToCart) {
                  dispatch(clearCart());
                  dispatch(addItem(itemToAddToCart));
                }
              }}
            >
              YES, START AFRESH
            </button>
          </div>
        </div>
      )}
      {cartLength && (
        <div className="flex justify-center">
          <div className="p-2 m-2 w-3/5 flex justify-between items-center bg-green-400 font-semibold text-white fixed -bottom-1">
            <div className="flex items-center ">
              <p className="m-1">{cartLength} Items |</p>
              <p>₹{totalAmount}</p>
            </div>
            <div className="flex items-center">
              <Link to="/cart">
                <h1 className="mr-1">VIEW CART</h1>
              </Link>
              <img
                className="h-4 w-4"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/ChatbotAssets/Checkout_Cart"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
