
import React, { useEffect, useState } from 'react';
import './App.css';
import { MainWeatherCard } from './components/MainWeatherCard';
import { WeatherCard } from './components/WeatherCard'

const API_KEY = process.env.REACT_APP_API_KEY;
// fetch("${api.base}weather?q={"New York"}&appid=${API_KEY}")

function App() {  

  const [mainWeather, setMainWeather] = useState('');

  // useEffect - invoked when app is loaded
  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MainWeatherCard 
          dayOfWeek="Thursday">
        </MainWeatherCard>
        <WeatherCard>
        </WeatherCard>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
