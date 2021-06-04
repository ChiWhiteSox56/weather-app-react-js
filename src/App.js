import React, { useEffect, useState } from "react";
import "./App.css";
import { TodaysWeatherCard } from "./components/TodaysWeatherCard";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherCardContainer } from "./components/WeatherCardContainer";
import { getCurrentWeekday, getTodaysDate } from "./utils/date";
import CitySearch from "./components/CitySearch";
import UseFetch from "./hooks/UseFetch";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const { data, error, isLoading, setUrl } = UseFetch();
  const [search, setSearch] = useState("");
  const [zip, setZip] = useState("11373");
  const [currentCity, setCurrentCity] = useState({});

  // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument
  useEffect(() => {
    getLatAndLong(zip);
    setUrl(
      `${BASE_URL}/data/2.5/onecall?lat=${currentCity[0]}&lon=${currentCity[1]}&exclude=minutely,hourly,alerts&appid=${API_KEY}`
    );
  }, []);
  // whatever gets passed into the second array... when it changes, useEffect hook will run again
  // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

  const handleSearchBoxChange = (e) => {
    setSearch(e.target.value);
  };

  const getLatAndLong = (zip) => {
    const url = `${BASE_URL}/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity([data.lat, data.lon]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CitySearch handleChange={handleSearchBoxChange} search={search} />
        </div>

        {data && (
          <TodaysWeatherCard
            todaysDate={getTodaysDate()}
            dayOfWeek={getCurrentWeekday()}
            iconId={data.current.weather[0].icon}
            // location={ data.city.name }
            description={data.current.weather[0].description}
            highTemp={data.daily[0].temp.max}
            feelsLike={data.current.feels_like}
            chanceOfPrecip={data.daily[0].pop}
            sunset={data.current.sunset}
          ></TodaysWeatherCard>
        )}
      </header>
      {data && <WeatherCardContainer weathers={data.daily} />}
    </div>
  );
}

export default App;
