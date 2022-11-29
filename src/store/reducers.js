/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

// Action Types
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, CLEAR_COMPLETED_TODO } from "./actions";

export const ToDoData = (state = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [], action) => {
    let updatedTodo = state;
    switch (action.type) {
        case ADD_TODO:
            updatedTodo = [action.payload, ...state];
            localStorage.setItem("todoData", JSON.stringify(updatedTodo));
            return updatedTodo;
        case DELETE_TODO:
            updatedTodo = [...state.filter((todoData) => todoData.id !== action.payload)];
            localStorage.setItem("todoData", JSON.stringify(updatedTodo));
            return updatedTodo;
        case COMPLETE_TODO:
            updatedTodo = state.map((todoData) => {
                if (todoData.id === action.payload) {
                    // eslint-disable-next-line no-param-reassign
                    todoData.completed = !todoData.completed;
                }
                return todoData;
            });
            localStorage.setItem("todoData", JSON.stringify(updatedTodo));
            return updatedTodo;
        case CLEAR_COMPLETED_TODO:
            updatedTodo = [...state.filter((todoData) => !todoData.completed)];
            localStorage.setItem("todoData", JSON.stringify(updatedTodo));
            return updatedTodo;
        default:
            return state;
    }
};
