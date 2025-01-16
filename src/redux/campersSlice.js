import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOperations.js";

const slice = createSlice({
        name         : "campers",
        initialState : {
            items        : [],
            total        : 0,
            loading      : false,
            error        : null,
            activeFilters: {}
        },
        reducers     : {
            applyFilters: (state, { payload }) => {
                state.activeFilters = payload;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchCampers.fulfilled, handleFetchCampersFulfilled)
                .addCase(fetchCampers.pending, handlePending)
                .addCase(fetchCampers.rejected, handleRejected);
        }
    }
);

function handlePending(state) {
    state.loading = true;
    state.items = [];
    state.total = 0;
    state.error = null;
}

function handleRejected(state, { payload }) {
    state.loading = false;
    state.error = payload;
}

function handleFetchCampersFulfilled(state, { payload }) {
    state.loading = false;
    state.items = payload.items;
    state.total = payload.items.length;
}

export const selectCampers = ({ campers }) => campers.items;
export const selectTotal = ({ campers }) => campers.total;
export const selectLoading = ({ campers }) => campers.loading;
export const selectError = ({ campers }) => campers.error;
export const selectActiveFilters = ({ campers }) => campers.activeFilters;
export const { applyFilters } = slice.actions;

export const selectFilteredCampers = createSelector([selectCampers, selectActiveFilters],
    (campers, filters) => {
        const favorites = JSON.parse((localStorage.getItem("favorites")) || "[]");

        return campers.filter(camper => {
            const matchesLocation = filters.location ? camper.location.toLowerCase().includes(filters.location.toLowerCase()) : true;

            const matchesFavorite = !filters.favorite || favorites.includes(camper.id);

            const matchesType = filters.type ? camper.form === filters.type : true;

            const matchesEquipment = filters.equipment
                ? Object.keys(filters.equipment).every(
                    key => {
                        if (key === "automatic" && filters.equipment[key]) return camper.transmission === "automatic";
                        return !filters.equipment[key] || camper[key];
                    }
                )
                : true;

            return matchesLocation && matchesType && matchesEquipment && matchesFavorite;
        });
    }
);

export default slice.reducer;
