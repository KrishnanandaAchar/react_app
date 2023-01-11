// 3rd Party Libraries
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { todoSlice } from "./features/todoSlice";
import { userSlice } from "./features/userSlice";

const store = configureStore({
    reducer: {
        ToDoData: todoSlice.reducer,
        UserData: userSlice.reducer,
    },
});

export default store;
