import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  search: string;
}

const initialState: InitialStateType = {
  search: "",
};

export const searchSlices = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state, payload) => {
      state.search = payload;
    },
    reset: (state) => {
      state.search = "";
    },
  },
});

export const {};
export default searchSlices.reducer;
