import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./feature/cartSlice";

// redux persist
import { persistReducer } from'redux-persist';
import storage from'redux-persist/lib/storage';
import { combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = combineReducers({
    cart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer: persistedReducer,
    

});

export default store;