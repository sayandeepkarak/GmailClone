import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: null,
      email: null,
      photo: null,
    },
  },
  reducers: {
    getValue: (state, action) => {
      state.value = {
        name: action.payload.displayName,
        email: action.payload.email,
        photo: action.payload.photoURL,
      };
    },
    remove: (state) => {
      state.value = {
        name: null,
        email: null,
        photo: null,
      };
    },
  },
});

export const { getValue, remove } = userSlice.actions;
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
