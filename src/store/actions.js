/* eslint-disable import/prefer-default-export */

export const ADD_TODO = "ADD_TODO";

export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: ADD_TODO, payload: todo });
};
