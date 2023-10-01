import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  isVeg,
  resId,
  showPopup,
  setShowIndex,
}) => {
  const filteredVegItems = data.itemCards.filter((item) =>
    isVeg
      ? item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      : item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
  );
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      {filteredVegItems.length !== 0 && (
        <div className=" mx-auto shadow-sm">
          <div
            className="flex justify-between cursor-pointer my-2 p-4"
            onClick={handleClick}
          >
            <span className="font-bold text-lg self-stretch">
              {data.title} ({filteredVegItems.length})
            </span>
            <span>
              <img
                className="w-5 h-5 text-black self-stretch"
                src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png"
                alt=""
              />
            </span>
          </div>
          {showItems && (
            <ItemList
              items={filteredVegItems}
              resId={resId}
              // showPopup={showPopup}
            />
          )}
        </div>
      )}
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
