import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit"

import TransitionsReducers from "./Transitions/transitionSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    transitions: TransitionsReducers
})

const persistedReducer = persistReducer(persistConfig , reducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof Store.getState>;

export default Store