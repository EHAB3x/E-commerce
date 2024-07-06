import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  categories,
  products,
  cart :  persistReducer(cartPersistConfig, cart),
});


const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };
