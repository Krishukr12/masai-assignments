import { useParams, useLoaderData } from "react-router-dom";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const cityWeatherLoader = async ({ params }: { params: any }) => {
  const cityName = params.city;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (res.status === 404) {
      return { status: false, message: "City not found" };
    }

    const data = await res.json();
    return { status: true, data };
  } catch (error) {
    return { status: false, message: "Error fetching weather data" };
  }
};

export const CityWeather = () => {
  const { city } = useParams();
  const data = useLoaderData() as {
    status: boolean;
    data?: any;
    message?: string;
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

  if (!data.status) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-red-500 text-lg">{data.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {data.data.name}
            </h1>
            <p className="text-gray-600">
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center justify-center mb-6">
                <span className="text-8xl">
                  {getWeatherIcon(data.data.weather[0].main)}
                </span>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-gray-800 mb-2">
                  {Math.round(data.data.main.temp)}°C
                </p>
                <p className="text-2xl text-gray-600 capitalize">
                  {data.data.weather[0].description}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Weather Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Feels Like</span>
                  <span className="font-semibold text-lg">
                    {Math.round(data.data.main.feels_like)}°C
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Humidity</span>
                  <span className="font-semibold text-lg">
                    {data.data.main.humidity}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wind Speed</span>
                  <span className="font-semibold text-lg">
                    {data.data.wind.speed} m/s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pressure</span>
                  <span className="font-semibold text-lg">
                    {data.data.main.pressure} hPa
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-600 mb-1">Min Temperature</p>
              <p className="text-2xl font-semibold">
                {Math.round(data.data.main.temp_min)}°C
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-600 mb-1">Max Temperature</p>
              <p className="text-2xl font-semibold">
                {Math.round(data.data.main.temp_max)}°C
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-600 mb-1">Visibility</p>
              <p className="text-2xl font-semibold">
                {(data.data.visibility / 1000).toFixed(1)} km
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-600 mb-1">Cloudiness</p>
              <p className="text-2xl font-semibold">{data.data.clouds.all}%</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Location
            </h3>
            <div className="w-full h-[400px] rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                }&q=${data.data.name}&zoom=12`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
