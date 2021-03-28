import React from 'react';
import { WeatherCard } from './WeatherCard'
import styled from 'styled-components'
import Flex from './Flex'

const CardsList = styled(Flex).attrs(() => ({
    flexWrap: "wrap",
    justifyContent: "center"
  }))``;

export const WeatherList = ( {weathers} ) => {
    return (
        <CardsList>

        </CardsList>
    )
}