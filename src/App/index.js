import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import getWeather from '../helpers/data/weatherApiData';
import './App.scss';

function App() {
  const [weather, setWeather] = useState([]);
  const [input, setInput] = useState('');

  const getCurrentWeather = () => {
    getWeather(input)
      .then((response) => {
        weather.push(response);
        setWeather([...weather]);
      });
  };

  const handleWeatherSubmit = (e) => {
    e.preventDefault();
    setInput('');
    getCurrentWeather();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  console.warn(weather);

  return (
    <div>
      <Form
      onSubmit={handleWeatherSubmit}
      id="get-weather">
        <div className="form-group">
          <h2
            id="search-title">
              Get the Weather
          </h2>
          <input
            type="text"
            className="form-control"
            id="value"
            aria-describedby="location"
            onChange={handleInput}>
          </input>
        </div>
      <Button
        type="submit"
        id="search-weather"
        outline color="dark">
          Submit
      </Button>
      </Form>
    </div>
  );
}

export default App;
