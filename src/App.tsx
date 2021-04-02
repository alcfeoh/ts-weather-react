import React, {useEffect, useState} from 'react';
import './App.css';
import {getWeatherData} from './data-service';
import Card from './Card';
import {WeatherResponse} from './data-types';
import ZipCodeEntry from './ZipCodeEntry';

function App() {
  const [data, setData] = useState<WeatherResponse>();

  useEffect(() => {
    getWeatherData('95742').then(res => setData(res));
  }, []);

  const addZipcode = (zipcode: string) => {
    console.log(zipcode);
  }

  return (
      <div className="well">
        <ZipCodeEntry onAdd={addZipcode} />
        {data ? <Card weather={data} zipcode={95742} /> : <>Loading...</>}
      </div>
  )
}

export default App;
