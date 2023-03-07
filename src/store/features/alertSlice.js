/* eslint-disable no-param-reassign */
// 3rd Party Libraries
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alertData: "",
    alertType: null,
    alertStatus: false,
};

export const alertSlice = createSlice({
    name: "ShowAlert",
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.alertStatus = true;
            state.alertType = action.payload.type;
            state.alertData = action.payload.msg;
        },
    },
});

export const { showAlert } = alertSlice.actions;
