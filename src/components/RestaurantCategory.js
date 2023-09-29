import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, isVeg, setShowIndex }) => {
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
        <div className=" mx-auto my-4 bg-gray-50 shadow-lg p-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">
              {data.title} ({filteredVegItems.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItems && <ItemList items={filteredVegItems} />}
        </div>
      )}
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
