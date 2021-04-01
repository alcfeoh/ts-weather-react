import React from 'react';
import './App.css';
import {WeatherResponse} from './data-types';

export interface CardProps {
    weather: WeatherResponse;
}

function Card(props: CardProps) {
    const {weather} = props;
  return (
      <div>
          <ul>
              <li>{weather.name}</li>
              <li>Min temp: {weather.main.temp_min}</li>
              <li>Max temp: {weather.main.temp_min}</li>
          </ul>
      </div>
  );
}

export default Card;
