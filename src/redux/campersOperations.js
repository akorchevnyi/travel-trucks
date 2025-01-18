import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
    "campers/fetchCampers",
    async (params, { rejectWithValue }) => {
        try {
            const response = await axios.get("/campers", { params });
            console.log("==== response.data ==> ", response.data);
            return response.data;
        } catch (error) {
            if (error.status === 404) {
                return {total: 0, items: []}
            }
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    "campers/fetchCamper",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;
        } catch (error) {
            console.error("API error: ", error);
            return rejectWithValue(error.message);
        }
    }
);
