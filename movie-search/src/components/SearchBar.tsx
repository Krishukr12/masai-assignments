import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeSearch } from "../redux/slices/searchSlice";
import type { RootState } from "../redux/store";

export const SearchBar = () => {
  const search = useAppSelector((state: RootState) => state.search.search);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };
  return (
    <div className="flex flex-col gap-2 mt-10">
      <input
        value={search}
        onChange={handleInputChange}
        className="outline-none shadow p-3"
        placeholder="Search Movie..."
        name="movie"
      />
      <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
        Search Movie
      </button>
    </div>
  );
};
