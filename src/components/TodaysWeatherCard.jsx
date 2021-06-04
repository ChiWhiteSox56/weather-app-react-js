import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin: 24px auto;
`;

const Location = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const TodaysDate = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const CurrentWeekday = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const TempHighMain = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const TempFeelsLike = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Description = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const ChanceOfPrecip = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Sunset = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const WeatherImageToday = styled.img`
  padding: 6px;
`;

const BoxVerticalLeft = styled.div`
  display: column;
`;

const BoxVerticalRight = styled.div`
  display: column;
`;

// const PrecipChanceMain = styled.div`
// `

const kelvinToFarenheit = (tempKelvin) => {
  return Math.round(((tempKelvin - 273.15) * 9) / 5 + 32) + "°F";
};

const unixToStandardTime = (unixTime) => {
  var dateObj = new Date(unixTime * 1000);
  return dateObj.toLocaleTimeString();
};

const convertToPercentage = (decimalValue) => {
  return decimalValue * 100;
};

export const TodaysWeatherCard = ({
  todaysDate,
  dayOfWeek,
  iconId,
  location,
  description,
  highTemp,
  feelsLike,
  chanceOfPrecip,
  sunset,
}) => {
  return (
    <Container>
      <BoxVerticalLeft>
        <WeatherImageToday
          src={`http://openweathermap.org/img/wn/${iconId}.png`}
        ></WeatherImageToday>
        <TodaysDate>{todaysDate}</TodaysDate>
        <CurrentWeekday>{dayOfWeek}</CurrentWeekday>
      </BoxVerticalLeft>
      <BoxVerticalRight>
        <Location>Elmhurst, NY</Location>
        <Description>{description}</Description>
        <TempHighMain>High temp: {kelvinToFarenheit(highTemp)}</TempHighMain>
        <TempFeelsLike>
          Feels like: {kelvinToFarenheit(feelsLike)}
        </TempFeelsLike>
        <ChanceOfPrecip>
          Chance of precipitation: {convertToPercentage(chanceOfPrecip)} %
        </ChanceOfPrecip>
        <Sunset>Sunset: {unixToStandardTime(sunset)}</Sunset>
      </BoxVerticalRight>
    </Container>
  );
};
