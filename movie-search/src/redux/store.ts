import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import searchReducer from "./slices/searchSlice";
import logger from "redux-logger";
import movieReducer from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
