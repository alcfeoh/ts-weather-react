import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getWeatherData} from './data-service';
import Card from './Card';

function App() {
  const [data, setData] = useState('');
  getWeatherData('95742').then(res => setData(JSON.stringify(res, null, ' ')))
  return (
      <pre>
          {data}
      </pre>
  );
}

export default App;
