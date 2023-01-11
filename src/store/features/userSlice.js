/* eslint-disable no-param-reassign */

// 3rd Party Libraries
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialUserData = {
    data: [],
    loading: false,
    errorMessage: "",
};

export const getUserData = createAsyncThunk("userData/getUserData", async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
});

export const userSlice = createSlice({
    name: "userData",
    initialState: initialUserData,
    reducers: {},
    extraReducers: {
        [getUserData.pending]: (state) => {
            state.loading = true;
        },
        [getUserData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        },
        [getUserData.rejected]: (state, { error }) => {
            state.loading = false;
            state.errorMessage = error.message;
        },
    },
});
