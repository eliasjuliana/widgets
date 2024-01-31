
const WeatherCard = (props) => {

    const {weatherData} = props;
    // console.log(weatherData);

    const temperature = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const city = weatherData.name;
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    // console.log(temperature);
    // console.log(city);
    // console.log(icon);
    // console.log(iconUrl);
    
  return (

    <article className="mt-3 place-items-center mb-3 cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-gray-800 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4" >
        <div className="flex">
            <div>
                <img src={iconUrl} className="img-fluid rounded-start shrink-0" alt="..."/>
                <h2 className="text-3xl font-bold text-gray-300">{temperature}°C</h2>
            </div>
            <div>
                <div>
                    <p className="font-semibold text-gray-300">{city}</p>
                    
                    <p className="text-gray-300">Real feel: {feelsLike}°C</p>
                    <p className="text-gray-300"><small className="text-body-secondary text-gray-300">Humidity: {humidity}%</small></p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default WeatherCard