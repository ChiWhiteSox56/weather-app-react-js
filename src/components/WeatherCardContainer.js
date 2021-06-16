import styled from "styled-components";
import Flex from "../style/Flex";
import { WeatherCard } from "./WeatherCard";
import { getForecastWeekday } from "../utils/date";
import { kelvinToFarenheit } from "../utils/weather";

export const WeatherCardList = styled(Flex).attrs(() => ({}))`
  justify-content: center;
  background-color: #fad6a5;
  @media (max-width: 1400px) {
    flex-direction: column;
    background-color: #fff;
  }
`;

export const WeatherCardContainer = ({ weathers }) => {
  const weathersMinusToday = weathers.slice(1);
  const forecastCards = weathersMinusToday.map((item) => (
    <WeatherCard
      key={item.dt}
      futureDate={getForecastWeekday(item.dt)}
      futureTempHigh={kelvinToFarenheit(item.temp.max)}
      futureIconId={item.weather[0].icon}
    />
  ));
  return <WeatherCardList>{forecastCards}</WeatherCardList>;
};
