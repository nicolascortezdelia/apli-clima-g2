import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import SearchCiudades from './SearchCiudades';
import { useThemeContext } from '../../providers/ThemeProviders';

const Search = () => {
  const [ciudades, setCiudades] = useState([]);
  const [elegida, SetElegida] = useState([]);
  useEffect(() => {
    const filtrarCiudades = async () => {
      const urlCiudadActual = 'http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc';
      const resultCiudadActual = await axios.get(urlCiudadActual);
      console.log(resultCiudadActual.data);
      setCiudades(resultCiudadActual.data);
    };
    filtrarCiudades();
  }, []);
  console.log(ciudades);
  console.log(elegida);

  const theme = useThemeContext();
  return (
      <div className="card justify-content-center mt-3">
      <div className={classNames('card', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
        <div className="card-body">
          <h5 className='my-3'>Busqueda por ciudad:</h5>
          <ul className='my-3'>
            <SearchCiudades ciudades={ciudades} SetElegida={(SetElegida)}/>
          </ul>
          <span className='my-3'> Ciudad elegida: {elegida} </span>
        </div>
        </div>
      </div>
  );
};

export default Search;
