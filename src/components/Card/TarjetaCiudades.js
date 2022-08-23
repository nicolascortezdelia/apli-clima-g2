import classNames from 'classnames';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProviders';

const TarjetaCiudades = ({ clima }) => {
  const theme = useThemeContext();
  return (
    <div className="card justify-content-center mt-3">
      <div className={classNames('card', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
        <img src={clima.current?.condition.icon} alt="" className='w-25 card-img-top' />
        <div className="card-body">
          <div className="text-muted fst-italic text-uppercase mx-5">
            <span > {clima.current?.condition.text}</span>
          </div>
          <h3>Ciudad: {clima.location?.name}</h3>
          <h4 className="text-muted">Provincia: {clima.location?.region}</h4>
          <h4 className="text-muted">Pais: {clima.location?.country}</h4>
          <span className="text-muted">{clima.current?.last_updated}</span>
        </div>
        </div>
    </div>
  );
};

export default TarjetaCiudades;
