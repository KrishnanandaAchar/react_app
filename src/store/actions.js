/* eslint-disable import/prefer-default-export */

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO";

export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: ADD_TODO, payload: todo });
};

export const completeTodo = (todoId) => (dispatch) => {
    dispatch({ type: COMPLETE_TODO, payload: todoId });
};

export const clearCompletedTodo = () => (dispatch) => {
    dispatch({ type: CLEAR_COMPLETED_TODO });
};

export const deleteTodo = (todoId) => (dispatch) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
};
