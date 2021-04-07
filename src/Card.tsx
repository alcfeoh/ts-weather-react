import React from 'react';
import './App.css';
import {WeatherResponse} from './data-types';

export interface CardProps {
    weather: WeatherResponse;
    onClose: (zipcode: string) => any;
}

function Card(props: CardProps) {
  const {weather, onClose} = props;
  return (
          <div className="well flex">
              <div>
                  <h3>{weather.name} ({weather.zipcode})</h3>
                  <h4>Current conditions: {weather.weather[0].main}</h4>
                  <h4>Temperatures today:</h4>
                  <p>
                      Current {weather.main.temp}
                      - Max {weather.main.temp_max}
                      - Min {weather.main.temp_min}
                  </p>
                  <p>
                      <a href="/forecast/95742">Show 5-day forecast for {weather.name}</a>
                  </p>
              </div>
              <div>
                  <span className="close" onClick={() => onClose(weather.zipcode)}>×</span>
                  <img src="https://www.angulartraining.com/images/weather/sun.png"/>
              </div>
          </div>
  );
}

export default Card;
