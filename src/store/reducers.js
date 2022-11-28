/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

// Action Types
import { ADD_TODO } from "./actions";

const defaultTodoData = [];

export const ToDoData = (state = defaultTodoData, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state];
        default:
            return state;
    }
};
