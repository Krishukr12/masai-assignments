import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${"f54ce061"}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl p-6 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Search Movies
          </h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query..."
              className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center">
            <p className="text-gray-600">Loading...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  Rating: {movie.vote_average.toFixed(1)}/10
                </p>
                <p className="text-gray-700 line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
