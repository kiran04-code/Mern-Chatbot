import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice/slice.js";

export const store = configureStore({
  reducer: {
    user: userSlice, // key: sliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
