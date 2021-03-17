import React from 'react' 
import styled from 'styled-components'
import moon from '../images/moon.png'

const Container = styled.div`
    display: flex;
    background-color: white;
    border-radius: 12px;
    padding: 12px;
    justify-content: space-evenly;
    align-items: center;
`

const Location = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const TodayMain = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const TempHighMain = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const TempFeelsLike = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const Description = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const Sunset = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const WeatherImageToday = styled.img`
    padding: 6px;
`

const BoxVerticalRight = styled.div`
    display: column;
`

// const TempCurrent = styled.div`
// `

// const PrecipChanceMain = styled.div`
// `

const kelvinToFarenheit = (tempKelvin) => {
    return Math.round(((tempKelvin - 273.15) * 9/5) + 32) + "°";
    
}

const unixToStandardTime = (unixTime) => {
    var dateObj = new Date(unixTime * 1000);
    return dateObj.toLocaleString();
}

export const TodaysWeatherCard = ({ dayOfWeek, location, description, highTemp, feelsLike, sunset }) => {
    return (
        <Container>
            <WeatherImageToday src="http://openweathermap.org/img/wn/10d@2x.png"></WeatherImageToday>
            <TodayMain>{ dayOfWeek }</TodayMain>
            <BoxVerticalRight>
                <Location>{ location }</Location>
                <Description>{ description }</Description>
                <TempHighMain>High temp: { kelvinToFarenheit(highTemp) }</TempHighMain>
                <TempFeelsLike>Feels like: { kelvinToFarenheit(feelsLike) }</TempFeelsLike>
                <Sunset>{ unixToStandardTime(sunset) }</Sunset>
            </BoxVerticalRight>
        </Container>
    )
}