// 3rd Party Libraries
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { PostsApi } from "./features/PostsApi";
import { todoSlice } from "./features/todoSlice";
import { userSlice } from "./features/userSlice";
import { loaderSlice } from "./features/loaderSlice";
import { alertSlice } from "./features/alertSlice";

const store = configureStore({
    reducer: {
        ToDoData: todoSlice.reducer,
        UserData: userSlice.reducer,
        AlertData: alertSlice.reducer,
        LoaderStatus: loaderSlice.reducer,
        [PostsApi.reducerPath]: PostsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostsApi.middleware),
});

export default store;
