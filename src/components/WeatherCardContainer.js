import styled from "styled-components"
import Flex from '../style/Flex'
import { WeatherCard } from "./WeatherCard"
import { kelvinToFarenheit } from "../services/weather"

export const WeatherCardList = styled(Flex).attrs(() => ({
    }))`
    justify-content: center;
    background-color: DeepPink;
`;

export const WeatherCardContainer = ({weathers}) => {
    console.log(weathers)
    const forecastCards = weathers.map((item) => 
        <WeatherCard 
            key={item.dt}
            futureTempHigh={kelvinToFarenheit(item.temp.max)}
        />
    );
    return (
        <WeatherCardList>
            { forecastCards }
        </WeatherCardList>
    )
}