import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCiudades from './SearchCiudades';

const Search = () => {
  const [ciudades, setCiudades] = useState([]);
  const [elegida, SetElegida] = useState([]);
  useEffect(() => {
    const filtrarCiudades = async () => {
      const urlCiudadActual = 'http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc';
      const resultCiudadActual = await axios.get(urlCiudadActual);
      // setLocation(resultLocation.location);
      console.log(resultCiudadActual.data);
      setCiudades(resultCiudadActual.data);
    };
    filtrarCiudades();
  }, []);
  console.log(ciudades);
  console.log(elegida);

  return (
    <>
      <div><h3>Busqueda Por Ciudad</h3></div>
      <ul>
        <SearchCiudades ciudades={ciudades} SetElegida={(SetElegida)}/>
      </ul>
      <h3>Ciudad Elegida: {elegida}</h3>

    </>
  );
};

export default Search;
