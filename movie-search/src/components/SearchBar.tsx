import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchMovie } from "../redux/slices/movieSlice";
import { changeSearch, resetSearch } from "../redux/slices/searchSlice";
import type { RootState } from "../redux/store";

export const SearchBar = () => {
  const search = useAppSelector((state: RootState) => state.search.search);
  const dispatch = useAppDispatch();

  const handleSearchMovie = () => {
    if (!search) return;
    dispatch(fetchMovie(search));
    dispatch(resetSearch());
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeSearch(e.target.value))
        }
        className="outline-none shadow p-3"
        placeholder="Search Movie..."
        name="movie"
      />
      <button
        disabled={!search}
        onClick={handleSearchMovie}
        className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Search Movie
      </button>
    </div>
  );
};
