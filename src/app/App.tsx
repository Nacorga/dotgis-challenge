import React, { useState, useEffect } from 'react';
import './App.scss';
import { cities } from './data/cities';
import axios from 'axios';
import ChartsComponent from './components/Chart';

function App() {

  const [city, setCity] = useState(cities[0]);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=0614d13377e407e8c0724c47d862443b`)
      .then((res: any) => setData(res.data))
      .catch(error => console.error(error)
    );
  });

  return (
    <div className="App">

      <div className="container">

        <header className="header">
          <h1 className="app-title">dotGIS React coding challenge</h1>
        </header>

        <nav className="cities-nav">
          <ul className="cities-list">
            {
              cities.map((city, i) => {
                return (
                  <li className="city" key={`city-${i}`}>
                    <span onClick={() => setCity(city)}>{city}</span>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <ChartsComponent city={city} data={data} />

      </div>

    </div>
  );
}

export default App;
