import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import userSlice from "./userslice/slice.js";
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/es/storage";

const rootereducer = combineReducers({
  user:userSlice
})

const persistConfig ={
  key:"root",
  storage,
  version:1

}
const persistReducered = persistReducer(persistConfig,rootereducer)
export const store = configureStore({
  reducer: persistReducered,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const  persistor = persistStore(store)