import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "resinfo",
  initialState: {
    resInfo: null,
  },
  reducers: {
    storeInfo: (state, action) => {
      state.resInfo = action.payload;
    },
  },
});

export const { storeInfo } = infoSlice.actions;
export default infoSlice.reducer;
