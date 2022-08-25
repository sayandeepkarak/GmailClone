import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: false,
  },
  reducers: {
    togglemenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglemenu } = menuSlice.actions;
export const selectmenu = (state) => state.menu.value;

export default menuSlice.reducer;
