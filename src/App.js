import React, { useEffect, useState } from 'react';
import './App.css';
import { TodaysWeatherCard } from './components/TodaysWeatherCard';
import { WeatherCard } from './components/WeatherCard'
import { WeatherCardContainer } from './components/WeatherCardContainer'
import { getCurrentWeekday, getTodaysDate } from './services/date'
import UseFetch from './hooks/UseFetch'

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
    const { data, error, isLoading, setUrl } = UseFetch()
   
    // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument  
    useEffect(() => {
      // setUrl(`${BASE_URL}/data/2.5/forecast?id=5128581&appid=${API_KEY}`)
      setUrl(`${BASE_URL}/data/2.5/onecall?lat=40.737976&lon=-73.880127&exclude=minutely,hourly,alerts&appid=${API_KEY}`)
    });
    // whatever gets passed into the second array... when it changes, useEffect hook will run again
    // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

  return (
    <div className="App">
      <header className="App-header">
        <TodaysWeatherCard 
          todaysDate= { data && getTodaysDate() }
          dayOfWeek={ data && getCurrentWeekday() }
          iconId={ data && data.current.weather[0].icon }
          // location={ data && data.city.name }
          description={ data && data.current.weather[0].description }
          highTemp={ data && data.daily[0].temp.max }
          feelsLike={ data && data.current.feels_like }
          chanceOfPrecip={ data && data.daily[0].pop }
          sunset={ data && data.current.sunset }
          >
        </TodaysWeatherCard>
      </header>
      { data && <WeatherCardContainer weathers={ data && data.daily }/> }
    </div>
  );
}

export default App;
