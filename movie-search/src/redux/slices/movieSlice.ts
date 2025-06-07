import { createSlice } from "@reduxjs/toolkit";

export fetchMovieByTitle

interface Movie {
  Poster: string;
  Title: string;
  Released: string;
}
interface InitialStateType {
  movie: Movie | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: InitialStateType = {
  movie: null,
  loading: "idle",
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
