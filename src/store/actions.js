/* eslint-disable import/prefer-default-export */

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO_CHECK = "UPDATE_TODO_CHECK";

export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: ADD_TODO, payload: todo });
};

export const deleteTodo = (todoId) => (dispatch) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
};

export const updateTodoCheck = (todoId) => (dispatch) => {
    dispatch({ type: UPDATE_TODO_CHECK, payload: todoId });
};
