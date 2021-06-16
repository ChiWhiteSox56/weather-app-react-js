import styled from "styled-components";
import Flex from "../style/Flex";
import { WeatherCard } from "./WeatherCard";
import { WeatherCardHorizontal } from "./WeatherCardHorizontal";
import { getForecastWeekday } from "../utils/date";
import { kelvinToFarenheit } from "../utils/weather";
import MediaQuery from "react-responsive";

export const WeatherCardList = styled(Flex).attrs(() => ({}))`
  justify-content: center;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const WeatherCardContainer = ({ weathers }) => {
  const weathersMinusToday = weathers.slice(1);
  const forecastCards = weathersMinusToday.map((item) => (
    <>
      <MediaQuery minWidth={1440}>
        <WeatherCard
          key={item.dt}
          futureDate={getForecastWeekday(item.dt)}
          futureTempHigh={kelvinToFarenheit(item.temp.max)}
          futureIconId={item.weather[0].icon}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1439}>
        <WeatherCardHorizontal
          key={item.dt}
          futureDate={getForecastWeekday(item.dt)}
          futureTempHigh={kelvinToFarenheit(item.temp.max)}
          futureIconId={item.weather[0].icon}
        />
      </MediaQuery>
    </>
  ));
  return <WeatherCardList>{forecastCards}</WeatherCardList>;
};
