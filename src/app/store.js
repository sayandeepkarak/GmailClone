import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import searchReducer from "../features/searchSlice";
import filterReducer from "../features/filterSlice";
import settingReducer from "../features/settingSlice";

export const store = configureStore({
  reducer: {
    menuReducer,
    searchReducer,
    filterReducer,
    settingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
