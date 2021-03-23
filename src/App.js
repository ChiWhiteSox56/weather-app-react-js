import React, { useEffect, useState } from 'react';
import './App.css';
import { TodaysWeatherCard } from './components/TodaysWeatherCard';
import { WeatherCard } from './components/WeatherCard'
import { getCurrentWeekday, getTodaysDate } from './services/date'

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [todaysWeather, setTodaysWeather] = useState(null)

    // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument  
    useEffect(() => {
      console.log("useEffect called")
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=5128581&cnt=1&appid=${API_KEY}`)
            .then(response => response.json())
            .then(json => setTodaysWeather(json))
    }, []) 
    console.log("LOG" + todaysWeather)
    // whatever gets passed into the second array... when it changes, useEffect hook will run again
    // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

  return (
    <div className="App">
      <header className="App-header">
        <TodaysWeatherCard 
          todaysDate= { todaysWeather && getTodaysDate() }
          dayOfWeek={ todaysWeather && getCurrentWeekday() }
          iconId={ todaysWeather && todaysWeather.list[0].weather[0].icon }
          location={ todaysWeather && todaysWeather.city.name }
          description={ todaysWeather && todaysWeather.list[0].weather[0].description }
          highTemp={ todaysWeather && todaysWeather.list[0].main.temp_max }
          feelsLike={ todaysWeather && todaysWeather.list[0].main.feels_like }
          chanceOfPrecip={ todaysWeather && todaysWeather.list[0].pop }
          sunset={ todaysWeather && todaysWeather.city.sunset }
          >
        </TodaysWeatherCard>
        <WeatherCard>
        </WeatherCard>
      </header>
    </div>
  );
}

export default App;
