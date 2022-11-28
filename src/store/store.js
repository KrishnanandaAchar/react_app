// 3rd Party Libraries
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

// Reducers
import { ToDoData } from "./reducers";

const rootReducers = combineReducers({ ToDoData });
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
