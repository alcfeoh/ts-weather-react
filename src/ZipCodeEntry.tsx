import React from 'react';
import './App.css';
import {WeatherResponse} from './data-types';

export interface ZipCodeEntryProps {
    onAdd: (zipcode: string) => any;
}

function ZipCodeEntry(props: ZipCodeEntryProps) {
  const {onAdd} = props;
  return (
      <div className="well">
          <h2>Enter a zipcode:</h2>
          <input className="form-control" placeholder="Zipcode" type="text" id="addLocation"/>
          <br/>
          <button className="btn btn-primary" id="addLocationBtn">
              Add location
          </button>
      </div>
  );
}

export default ZipCodeEntry;
