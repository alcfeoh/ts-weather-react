import {WeatherResponse} from './data-types';

const APP_ID = "5a4b2d457ecbef9eb2a71e480b947604";

export function getWeatherData(zipcode: string): Promise<WeatherResponse> {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=${APP_ID}`)
        .then(response => response.json());
}
