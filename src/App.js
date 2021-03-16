
import React, { useEffect, useState } from 'react';
import './App.css';
import DataFetching from './components/DataFetching';
import { TodaysWeatherCard } from './components/TodaysWeatherCard';
import { WeatherCard } from './components/WeatherCard'

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [todaysWeather, setTodaysWeather] = useState(null)

    // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument  
    useEffect(() => {
        //fetch(`https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${API_KEY}`)
         fetch(`https://jsonplaceholder.typicode.com/todos/3`)
            .then(response => response.json())
            .then(json => setTodaysWeather(json))
    }, []) 
    console.log(todaysWeather)
    // whatever gets passed into the second array... when it changes, useEffect hook will run again
    // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

  return (
    <div className="App">
      <header className="App-header">
        <TodaysWeatherCard 
          dayOfWeek={ JSON.stringify(getTodaysDate()) }
          //  location={ todaysWeather && todaysWeather.name }
          //  description={ todaysWeather && todaysWeather.weather[0].description }
          //  highTemp={ todaysWeather && todaysWeather.main.temp }
          //  feelsLike={ todaysWeather && todaysWeather.main.feels_like }
          // sunset={ mainWeather.main.humidity }
          >
        </TodaysWeatherCard>
        <WeatherCard>
        </WeatherCard>
      </header>
    </div>
  );
}

function getTodaysDate() {
  var dateObject = new Date()
  var weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var dayOfWeek = weekday[dateObject.getUTCDay()];
  return dayOfWeek
}

export default App;
