/* eslint-disable no-param-reassign */

// 3rd Party Libraries
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: localStorage.getItem("TodoData") ? JSON.parse(localStorage.getItem("TodoData")) : [] };

export const todoSlice = createSlice({
    name: "ToDoData",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem("TodoData", JSON.stringify(state.value));
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("TodoData", JSON.stringify(state.value));
        },
        updateTodoCheck: (state, action) => {
            state.value.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
            });
            localStorage.setItem("TodoData", JSON.stringify(state.value));
        },
    },
});

export const { addTodo, deleteTodo, updateTodoCheck } = todoSlice.actions;
