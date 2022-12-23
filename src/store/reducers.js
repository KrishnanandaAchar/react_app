/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

// Action Types
import { ADD_TODO, DELETE_TODO, UPDATE_TODO_CHECK } from "./actions";

const defaultTodoData = [];

export const ToDoData = (state = localStorage.getItem("TodoData") ? JSON.parse(localStorage.getItem("TodoData")) : defaultTodoData, action) => {
    switch (action.type) {
        case ADD_TODO:
            const addedTodo = [action.payload, ...state];
            localStorage.setItem("TodoData", JSON.stringify(addedTodo));
            return addedTodo;
        case DELETE_TODO:
            const todoAfterDelete = state.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("TodoData", JSON.stringify(todoAfterDelete));
            return todoAfterDelete;
        case UPDATE_TODO_CHECK:
            const todoAfterCheck = [...state];
            todoAfterCheck.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
            });
            localStorage.setItem("TodoData", JSON.stringify(todoAfterCheck));
            return todoAfterCheck;
        default:
            return state;
    }
};
