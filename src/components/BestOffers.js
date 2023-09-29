import { off } from "process";
import React from "react";
import { useSelector } from "react-redux";
import OfferCard from "./OfferCard";

const BestOffers = () => {
  const offersList = useSelector(
    (store) =>
      store?.resInfo?.resInfo[0]?.card?.card?.gridElements?.infoWithStyle?.info
  );
  return (
    <div>
      <h1 className="font-bold text-3xl ml-8">Best offers for you </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex m-4">
          {offersList &&
            offersList.map((offer) => (
              <OfferCard offerInfo={offer} key={offer.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
