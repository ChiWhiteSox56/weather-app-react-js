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
`

const TodayMain = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: black;
`

const WeatherImageMain = styled.img.attrs({
    src: `${moon}`
})`
    padding: 6px;
`

const TempMain = styled.div`
`

const PrecipChanceMain = styled.div`
`

export const MainWeatherCard = ({ dayOfWeek }) => {
    return (
        <Container>
            <WeatherImageMain></WeatherImageMain>
            <TodayMain>{dayOfWeek}</TodayMain>
            <TempMain>High of 70</TempMain>
        </Container>
    )
}