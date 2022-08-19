import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TarjetaCiudades from './TarjetaCiudades';

const Clima = () => {
  const [clima, setClima] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const obtenerCiudades = async () => {
      // const urlLocation = 'http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc';
      // const urlClimaActual = 'http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=tuc';
      const urlClimaActual = 'http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=Tucuman&days=1&aqi=no&alerts=no';
      // const resultLocation = await axios.get(urlLocation);
      const resultClimaActual = await axios.get(urlClimaActual);
      // setLocation(resultLocation.location);
      console.log(resultClimaActual.data);
      setClima(resultClimaActual.data);
    };
    obtenerCiudades();
  }, []);
  console.log(clima);
  console.log(location);

  return (
    <div>
      <h1>Clima por Ciudades</h1>
      <button className="mb-3 mt-3"> Search Ciudad</button>
      <ul>
        <TarjetaCiudades clima={clima}/>
      </ul>;
    </div>
  );
};

export default Clima;
