import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios";

interface Rating {
  Source: string;
  Value: string;
}

interface MovieSeries {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

interface InitialStateType {
  movie: MovieSeries | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InitialStateType = {
  movie: null,
  loading: "idle",
  error: null,
};

export const fetchMovie = createAsyncThunk(
  "fetch/movie",
  async (searchText: string) => {
    const res = await axiosInstance(`/?t=${searchText}`);

    if (res.data.Error) {
      throw new Error(res.data.Error);
    }
    return res.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default movieSlice.reducer;
