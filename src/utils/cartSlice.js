import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    resId: null,
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload.item);
      state.totalAmount = parseFloat(
        (state.totalAmount + action.payload.price).toFixed(2)
      );
      state.resId = action.payload.resId;
    },
    updateItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.item.card.info.id === action.payload;
      });

      const existingCartItem = state.items[existingCartItemIndex];
      const itemPrice = parseFloat(
        (existingCartItem.item.card.info.price
          ? parseFloat((existingCartItem.item.card.info.price / 100).toFixed(2))
          : parseFloat(
              (existingCartItem.item.card.info.defaultPrice / 100).toFixed(2)
            )
        ).toFixed(2)
      );

      const updatedTotalAmount = state.totalAmount + itemPrice;
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        resId: state.resId,
      };
    },
    removeItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.item.card.info.id === action.payload;
      });

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = parseFloat(
        state.totalAmount -
          (existingItem.item.card.info.price
            ? parseFloat((existingItem.item.card.info.price / 100).toFixed(2))
            : parseFloat(
                (existingItem.item.card.info.defaultPrice / 100).toFixed(2)
              )
          ).toFixed(2)
      );

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.item.card.info.id !== action.payload
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      const updatedResId = updatedItems.length === 0 ? null : state.resId;
      return {
        items: updatedItems,
        totalAmount: parseFloat(updatedTotalAmount.toFixed(2)),
        resId: updatedResId,
      };
    },

    // originalState = {items:["pizza"]}

    clearCart: (state) => {
      // RTK - either mutate the existing state or return a new state
      //   state.items.length = 0; // originalState = []
      return { items: [] }; // this new object will be replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, updateItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
