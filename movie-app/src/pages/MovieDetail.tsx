export const MovieDetail = () => {
  const movie = {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/I/51s+L5s4UIL._AC_SY679_.jpg",
    year: "2010",
    genre: "Action, Adventure, Sci-Fi",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-xl object-cover shadow-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {movie.title}
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold">Year:</span> {movie.year}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Genre:</span> {movie.genre}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Plot</h3>
            <p className="text-gray-700">{movie.plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
