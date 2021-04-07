import {WeatherResponse} from './data-types';

const APP_ID = "42b0cd87da0e1ba5a9580ed019511475";
const URL = 'https://lp-store.herokuapp.com/weather';
//const URL = 'http://api.openweathermap.org/data/2.5/weather';

export function getWeatherData(zipcode: string): Promise<WeatherResponse> {
    return fetch(`${URL}?zipcode=${zipcode}&units=imperial&APPID=${APP_ID}`)
        .then(response => response.json())
        .then(response => ({...response, zipcode}));
}
