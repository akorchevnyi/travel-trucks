import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from "./filtersSlice";
import campersReducer from "./campersSlice";

const persistConfig = {
    key: "favorite-campers",
    storage,
    whitelist: ["favorites"],
};


const persistedCampersReducer = persistReducer(persistConfig, campersReducer);


const rootReducer = combineReducers({
    filters: filterReducer,
    campers: persistedCampersReducer,
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export const persistor = persistStore(store);
