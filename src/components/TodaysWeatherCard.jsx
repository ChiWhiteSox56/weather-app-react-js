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

const WeatherImageMain = styled.img.attrs({
    src: `${moon}`
})`
    padding: 6px;
`

// const TempCurrent = styled.div`
// `

// const PrecipChanceMain = styled.div`
// `

export const TodaysWeatherCard = ({ dayOfWeek, location, description, highTemp, feelsLike, sunset }) => {
    return (
        <Container>
            <WeatherImageMain></WeatherImageMain>
            <TodayMain>{ dayOfWeek }</TodayMain>
            <Location>{ location }</Location>
            <Description>{ description }</Description>
            <TempHighMain>{ highTemp }</TempHighMain>
            <TempFeelsLike>{ feelsLike }</TempFeelsLike>
            <Sunset>{ sunset }</Sunset>
        </Container>
    )
}