import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  count: number;
}

const initialState: initialStateType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
