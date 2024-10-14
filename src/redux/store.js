import { configureStore } from "@reduxjs/toolkit";
import toDoItemReducer from "./Slices/todoItemsSlice";
import isLogedInReducer from "./Slices/isLogedInSlice";

export const store = configureStore({
    reducer:{
        todoItems: toDoItemReducer,
        isLogedIn: isLogedInReducer
    }
})