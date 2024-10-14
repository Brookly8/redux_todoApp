import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoItems: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("todoItems/fechTodos", async () => {
  const { data } = await axios("https://dummyjson.com/todos");
  return data;
});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

let randomUserId = parseInt(getRandom(1, 1000).toFixed(0));
let randomId = parseInt(getRandom(1, 1000).toFixed(0));

export const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todoItems.unshift({
        id: randomId,
        completed: false,
        todo: action.payload,
        userId: randomUserId,
      });
    },
    removeToDo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
    changeStatus: (state, action) => {
      const item = state.todoItems.find((todo) => todo.id === action.payload);
      item.completed = !item.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.todoItems = action.payload.todos;
        state.status = "succeeded";
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = "failed";
      });
  },
});
export const { addToDo, removeToDo, changeStatus } = todoItemsSlice.actions;

export default todoItemsSlice.reducer;
