import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import searchReducer from "../features/searchSlice";
import filterReducer from "../features/filterSlice";
import settingReducer from "../features/settingSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    menuReducer,
    searchReducer,
    filterReducer,
    settingReducer,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
