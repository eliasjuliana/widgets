import { useMutation } from "@tanstack/react-query";
import WeatherCard from "../Components/Weather/WeatherCard.jsx";
import WeatherForm from "../Components/Weather/WeatherForm.jsx";
import { toast } from "sonner";

const getWeatherFn = async (location) => {
  let url = import.meta.env.VITE_WEATHER_URL;
  const apiID = import.meta.env.VITE_WEATHER_ID;
  let cityName = location;

  if (cityName) {
    url += `q=${cityName}&appid=${apiID}&units=metric`;
  }

  // console.log(url)
  const response = await fetch(url);
  const data = await response.json();
//   console.log(data);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return data;
};

// getWeatherFn()

const Weather = () => {
  // const {data: weatherData, isLoading, isError} = useQuery({ queryKey: ['weatherData'], queryFn: getWeatherFn});

  const {
    mutate: getWeather,
    data: weatherData,
    isError,
  } = useMutation({ mutationFn: getWeatherFn });

  if (isError) {
    toast.error("Ocurrio un error");
  }

  return (
    <div className="flex flex-col content-center items-center border shadow-md md:flex-row lg:flex-col min-h-96">
      <WeatherForm getWeather={getWeather} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
