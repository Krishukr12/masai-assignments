import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import searchReducer from "./slices/searchSlice";
import movieReducer from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    movie: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
