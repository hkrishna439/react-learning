import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import infoSlice from "./infoSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    resInfo: infoSlice,
  },
});

export default appStore;
