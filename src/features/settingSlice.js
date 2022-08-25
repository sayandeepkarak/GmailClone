import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    value: false,
  },
  reducers: {
    toggleSetting: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleSetting } = settingSlice.actions;
export const selectSetting = (state) => state.setting.value;

export default settingSlice.reducer;
