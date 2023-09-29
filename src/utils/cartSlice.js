import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload.item.card.info.id);
      // mutating the state here
      state.items.push(action.payload.item);
      state.totalAmount = state.totalAmount + action.payload.amount;
    },
    removeItem: (state) => {
      state.items.pop();
    },

    // originalState = {items:["pizza"]}

    clearCart: (state) => {
      // RTK - either mutate the existing state or return a new state
      //   state.items.length = 0; // originalState = []
      return { items: [] }; // this new object will be replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
