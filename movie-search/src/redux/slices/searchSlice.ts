import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  search: string;
}

const initialState: InitialStateType = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state: InitialStateType, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    resetSearch: (state: InitialStateType) => {
      state.search = "";
    },
  },
});

export const { resetSearch, changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
