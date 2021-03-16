
import './App.css';
import DataFetching from './components/DataFetching';
import { TodaysWeatherCard } from './components/TodaysWeatherCard';
import { WeatherCard } from './components/WeatherCard'

function App() {  

  //const [mainWeather, setMainWeather] = useState(getWeather());

  // useEffect - invoked when app is loaded
  // useEffect(() => {
  //   let mounted = true;
  //   getWeather()
  //     .then(todaysWeather => {
  //       if(mounted) {
  //         setMainWeather(todaysWeather)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <TodaysWeatherCard 
          // dayOfWeek={ mainWeather.main.humidity }
          // location={ mainWeather.name }
          // description={ mainWeather.main.humidity }
          // highTemp={ mainWeather.main.humidity }
          // feelsLike={ mainWeather.main.humidity }
          // sunset={ mainWeather.main.humidity }
          >
        </TodaysWeatherCard>
        <DataFetching/>
        <WeatherCard>
        </WeatherCard>
      </header>
    </div>
  );
}

export default App;
