import React from 'react';
import './App.css';

export interface ZipCodeEntryProps {
    onAdd: (zipcode: string) => any;
}

function ZipCodeEntry(props: ZipCodeEntryProps) {
  const {onAdd} = props;
  const zipInput = React.createRef<HTMLInputElement>();

  const addZip = () => {
      if (zipInput.current?.value) {
          onAdd(zipInput.current?.value);
      } else {
          alert('Please enter a zipcode first');
      }
  };

  return (
      <div className="well">
          <h2>Enter a zipcode:</h2>
          <input className="form-control" ref={zipInput} placeholder="Zipcode" type="text" id="addLocation"/>
          <br/>
          <button className="btn btn-primary" id="addLocationBtn" onClick={addZip}>
              Add location
          </button>
      </div>
  );
}

export default ZipCodeEntry;
