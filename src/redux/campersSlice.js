import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOperations.js";
import { selectFilters } from "./filtersSlice.js";

const slice = createSlice({
        name         : "campers",
        initialState : {
            items  : [],
            total: 0,
            loading: false,
            error  : null
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

export const selectFilteredCampers = createSelector([selectCampers, selectFilters],
    (campers, filter) => {
        return campers
    }
);

export default slice.reducer;
