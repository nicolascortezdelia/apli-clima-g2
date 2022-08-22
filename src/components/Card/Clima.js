import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TarjetaCiudades from './TarjetaCiudades';

const Clima = () => {
  const [clima, setClima] = useState([]);
  // const [location, setLocation] = useState([]);

  useEffect(() => {
    const obtenerCiudades = async () => {
      const urlClimaActual = 'http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=Tucuman&days=1&aqi=no&alerts=no';
      const resultClimaActual = await axios.get(urlClimaActual);
      setClima(resultClimaActual.data);
    };
    obtenerCiudades();
  }, []);
  console.log(clima);
  // console.log(location);

  return (
    <div>
      <TarjetaCiudades clima={clima}/>
    </div>
  );
};

export default Clima;
