import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = false;

export const isLogedInSlice = createSlice({
  name: "isLogedIn",
  initialState: initialState,
  reducers: {
    isLogedIn: (state, action) => {
      return !state;
    },
  },
});

export const { isLogedIn } = isLogedInSlice.actions;
export default isLogedInSlice.reducer;
