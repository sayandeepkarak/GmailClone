import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: false,
  },
  reducers: {
    showfilter: (state) => {
      state.value = !state.value;
    },
    hidefilter: (state) => {
      state.value = false;
    },
  },
});

export const { showfilter, hidefilter } = filterSlice.actions;
export const selectfilter = (state) => state.filter.value;

export default filterSlice.reducer;
