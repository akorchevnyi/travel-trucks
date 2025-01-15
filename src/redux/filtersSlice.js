import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location : "",
    type     : "",
    equipment: {
        ac       : false,
        automatic: false,
        kitchen  : false,
        tv       : false,
        bathroom : false
    },
    favorite : false
};

const slice = createSlice({
    name    : "filters",
    initialState,
    reducers: {
        changeLocation : (state, { payload }) => {
            return {
                ...state,
                location: payload
            };
        },
        changeType     : (state, { payload }) => {
            return {
                ...state,
                type: payload
            };
        },
        changeEquipment: (state, { payload }) => {
            return {
                ...state,
                equipment: payload
            };
        },
        changeFavorite : (state, { payload }) => {
            return { ...state, favorite: payload };
        }
    }
});

export const { changeLocation, changeType, changeEquipment, changeFavorite } = slice.actions;

export const selectLocation = ({ filters }) => filters.location;
export const selectType = ({ filters }) => filters.type;
export const selectEquipment = ({ filters }) => filters.equipment;
export const selectFavorite = ({ filters }) => filters.favorite;
export const selectFilters = ({ filters }) => filters;

export default slice.reducer;
