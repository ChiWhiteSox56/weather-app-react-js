
import React from 'react';
import './App.css';
import { MainWeatherCard } from './components/MainWeatherCard';
import { WeatherCard } from './components/WeatherCard'

const api = {
  base: "api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainWeatherCard></MainWeatherCard>
        <WeatherCard>{api.base}</WeatherCard>
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
