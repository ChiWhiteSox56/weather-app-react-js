import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;


function DataFetching() {
    const [todaysWeather, setTodaysWeather] = useState(null)

    // always runs as componentDidMount, will run as componentDidUpdate if empty array is not passed as second argument  
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${API_KEY}`)
        // fetch(`https://jsonplaceholder.typicode.com/todos/3`)
            .then(response => response.json())
            .then(json => setTodaysWeather(json))
    }, []) 
    console.log(todaysWeather)
    // whatever gets passed into the second array... when it changes, useEffect hook will run again
    // passing an empty array here means you only want the useEffect to run on the first render; array can contain dependencies on which repeated calls to this useEffect are based

    return (
        <>
        {/* // check that todaysWeather exists, then if so get the temp */}
        <div>
        Was this task completed? {todaysWeather && todaysWeather.main.temp} 
        </div>
        </>
       
    )
}

export default DataFetching