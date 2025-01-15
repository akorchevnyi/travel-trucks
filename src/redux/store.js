import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import campersReducer from "./campersSlice";

const rootReducer = combineReducers({
    filters: filterReducer,
    campers: campersReducer
});

export const store = configureStore({ reducer: rootReducer });
