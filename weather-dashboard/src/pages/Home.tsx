import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const homeLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const searchText = url.searchParams.get("q") || "";

  if (!searchText) {
    return { status: false, message: "Please enter a city name " };
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`
    );

    if (res.status === 404) {
      return { status: false, message: "City not found" };
    }

    const data = await res.json();
    return { status: true, data };
  } catch (error: unknown) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "something went wrong",
    };
  }
};

export const Home = () => {
  const [search, setSearch] = useState("");
  const data = useLoaderData() as {
    status: boolean;
    data?: any;
    message?: string;
  };
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?q=${encodeURIComponent(search.trim())}`);
    }
    setSearch("");
  };

  const handleCardClick = () => {
    if (data.status && data.data?.name) {
      navigate(`/weather/${data.data.name.toLowerCase()}`);
    }
  };

  const getWeatherIcon = (condition: string) => {
    const icons: { [key: string]: string } = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Drizzle: "🌦️",
      Thunderstorm: "⛈️",
      Snow: "🌨️",
      Mist: "🌫️",
    };
    return icons[condition] || "🌡️";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city"
              className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
            >
              Search
            </button>
          </div>
        </form>

        {data.status ? (
          <div
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={handleCardClick}
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {data.data.name}
              </h2>
              <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl">
                    {getWeatherIcon(data.data.weather[0].main)}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800">
                    {Math.round(data.data.main.temp)}°C
                  </p>
                  <p className="text-xl text-gray-600 capitalize">
                    {data.data.weather[0].description}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Feels Like</span>
                    <span className="font-semibold">
                      {Math.round(data.data.main.feels_like)}°C
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Humidity</span>
                    <span className="font-semibold">
                      {data.data.main.humidity}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Wind Speed</span>
                    <span className="font-semibold">
                      {data.data.wind.speed} m/s
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pressure</span>
                    <span className="font-semibold">
                      {data.data.main.pressure} hPa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-600">Min Temperature</p>
                <p className="text-xl font-semibold">
                  {Math.round(data.data.main.temp_min)}°C
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-600">Max Temperature</p>
                <p className="text-xl font-semibold">
                  {Math.round(data.data.main.temp_max)}°C
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-red-500 text-lg">{data.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};
