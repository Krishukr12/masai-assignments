import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";

export const MovieCard = () => {
  const { movie, loading } = useAppSelector((state: RootState) => state.movie);

  if (loading === "pending") {
    return <Loading />;
  }

  if (loading === "failed" || !movie) {
    return <ErrorMessage />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
        <p className="text-gray-600">Released: {movie.Year}</p>
      </div>
    </div>
  );
};
