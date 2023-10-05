import { off } from "process";
import React from "react";
import { useSelector } from "react-redux";
import OfferCard from "./OfferCard";
import { Link } from "react-router-dom";

const BestOffers = () => {
  const offersList = useSelector(
    (store) =>
      store?.resInfo?.resInfo[0]?.card?.card?.gridElements?.infoWithStyle?.info
  );
  return (
    <div>
      <h1 className="font-bold text-2xl ml-8">Best offers for you </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex m-4">
          {offersList &&
            offersList.map((offer) =>
              offer.action.link.includes("collections") ? (
                <Link
                  to={
                    "/" + offer.action.link.slice(23, offer.action.link.length)
                  }
                  key={offer.imageId}
                >
                  <OfferCard offerInfo={offer} />
                </Link>
              ) : (
                <Link to={"/restaurants/" + offer.entityId} key={offer.imageId}>
                  <OfferCard offerInfo={offer} />
                </Link>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
