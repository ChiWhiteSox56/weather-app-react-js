import React from "react";
import styled from "styled-components";

const FutureContainer = styled.div`
  background-color: lemonchiffon;
  border-radius: 12px;
  padding: 12px;
  margin: 6px, auto;
  justify-content: space-evenly;
  align-items: center;
  width: 12%;
  flex-basis: 170px;
  flex-shrink: 0;
  @media (max-width: 1439px) {
    width: 70%;
    margin: 6px auto;
    padding: 0;
  }
`;

const FutureDate = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const FutureTempHigh = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const FutureTempFeelsLike = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const FutureDescription = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const futureChanceOfPrecip = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const FutureWeatherImage = styled.img`
  padding: 6px;
`;

// const BoxVerticalLeft = styled.div`
//     display: column;
// `

// const BoxVerticalRight = styled.div`
//     display: column;
// `

export const WeatherCardHorizontal = ({
  futureDate,
  futureTempHigh,
  futureIconId,
}) => {
  return (
    <FutureContainer>
      <FutureWeatherImage
        src={`http://openweathermap.org/img/wn/${futureIconId}.png`}
      ></FutureWeatherImage>
      <FutureDate>{futureDate}</FutureDate>
      <FutureTempHigh>Hi temp is: {futureTempHigh}</FutureTempHigh>
    </FutureContainer>
  );
};
