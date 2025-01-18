import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOperations.js";

const slice = createSlice({
        name         : "campers",
        initialState : {
            items         : [],
            loading       : false,
            error         : null,
            activeFilters : {},
            selectedCamper: null,
            favorites     : []
        },
        reducers     : {
            applyFilters   : (state, { payload }) => {
                state.activeFilters = payload;
            },
            changeFavorites: (state, { payload }) => {
                const index = state.favorites.findIndex(item => item === payload);
                if (index === -1) {
                    state.favorites.push(payload);
                }
                else {
                    state.favorites.splice(index, 1);
                }
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchCampers.fulfilled, handleFetchCampersFulfilled)
                .addCase(fetchCamperById.fulfilled, handleFetchCamperByIdFulfilled)

                .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
                .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
        }
    }
);

function handlePending(state) {
    state.loading = true;
    state.items = [];
    state.error = null;
}

function handleRejected(state, { payload }) {
    state.loading = false;
    state.error = payload;
}

function handleFetchCampersFulfilled(state, { payload }) {
    state.loading = false;
    state.items = payload.items;
    state.total = payload.total;
}

function handleFetchCamperByIdFulfilled(state, { payload }) {
    state.loading = false;
    state.selectedCamper = payload;
}

export const selectCampers = ({ campers }) => campers?.items;
export const selectLoading = ({ campers }) => campers.loading;
export const selectError = ({ campers }) => campers.error;
export const selectFavorites = ({ campers }) => campers.favorites;
export const selectActiveFilters = ({ campers }) => campers.activeFilters;
export const selectSelectedCamper = ({ campers }) => campers.selectedCamper;

export const { applyFilters, changeFavorites } = slice.actions;

export const selectFilteredCampers = createSelector([selectCampers, selectActiveFilters, selectFavorites],
    (campers, filters, favorites) => {
        return campers.filter(camper => {
            const matchesLocation = filters.location ? camper.location.toLowerCase().includes(filters.location.toLowerCase()) : true;

            const matchesFavorite = !filters.favorite || favorites.includes(camper.id);

            return matchesLocation && matchesFavorite;
        });
    }
);


export default slice.reducer;
