/* eslint-disable no-param-reassign */
// 3rd Party libraries
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

export const loaderSlice = createSlice({
    name: "loaderStatus",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.value = true;
        },
        stoploading: (state) => {
            state.value = false;
        },
    },
});

export const { startLoading, stoploading } = loaderSlice.actions;
