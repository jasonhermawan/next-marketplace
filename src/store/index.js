import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistCartConfig = {
  key: "cart",
  storage,
}

const persistedCart = persistReducer(persistCartConfig, cartSlice)

export const store = configureStore({
  reducer: {
    cart: persistedCart,
  },
  middleware: [],
  devTools: true,
});

export const persistor = persistStore(store)
