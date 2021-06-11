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
  const [search, setSearch] = useState("");
  const [zip, setZip] = useState("11373");
  const [currentCity, setCurrentCity] = useState([]);
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState();

  // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument
  useEffect(() => {
    getLatAndLong(zip);
  }, [zip]);
  // whatever gets passed into the second array... when it changes, useEffect hook will run again
  // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

  useEffect(() => {
    if (currentCity.length > 0) {
      const weatherUrl = `${BASE_URL}/data/2.5/onecall?lat=${currentCity[0]}&lon=${currentCity[1]}&exclude=minutely,hourly,alerts&appid=${API_KEY}`;
      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentCity]);

  const handleSearchBoxChange = (e) => {
    setSearch(e.target.value);
  };

  const makeZipEqualSearch = () => {
    setZip(search);
  };

  // possible function (option 1) make zip whatever is in search
  // pass setZip function to Search component (option 2)

  const getLatAndLong = (zip) => {
    const url = `${BASE_URL}/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCityName(data.name);
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
          <CitySearch
            handleChange={handleSearchBoxChange}
            search={search}
            zipIsSearch={makeZipEqualSearch}
          />
        </div>

        {data && data.current && (
          <TodaysWeatherCard
            todaysDate={getTodaysDate()}
            dayOfWeek={getCurrentWeekday()}
            iconId={data.current.weather[0].icon}
            location={cityName}
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
