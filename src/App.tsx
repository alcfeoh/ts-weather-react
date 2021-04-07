import React, {useEffect, useState} from 'react';
import './App.css';
import {getWeatherData} from './data-service';
import Card from './Card';
import {WeatherResponse} from './data-types';
import ZipCodeEntry from './ZipCodeEntry';
import {addZipcode, getZipcodes, removeZipcode} from './storage-service';

function App() {
  const [data, setData] = useState<WeatherResponse[]>([]);

  useEffect(() => {
    const zipcodes = getZipcodes();
    Promise.all(
        zipcodes.map(zip => getWeatherData(zip))
    ).then(responses => setData(responses));
  }, []);

  const addZip = (zipcode: string) => {
    addZipcode(zipcode);
    getWeatherData(zipcode).then(res => {
      const newData = [...data, res];
      setData(newData);
    });
  }

  const removeZip = (zipcode: string) => {
    removeZipcode(zipcode);
    const newData = data.filter(weather => weather.zipcode != zipcode);
    setData(newData);
  }

  return (
      <div className="container-fluid">
        <ZipCodeEntry onAdd={addZip} />
        {data.map(weather => <Card weather={weather} onClose={removeZip} />)}
      </div>
  )
}

export default App;
