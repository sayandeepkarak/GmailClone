import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    getsearch: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = "";
    },
  },
});

export const { getsearch, clear } = searchSlice.actions;
export const selectUser = (state) => state.search.value;

export default searchSlice.reducer;
