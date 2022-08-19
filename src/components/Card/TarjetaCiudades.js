import React from 'react';

const TarjetaCiudades = ({ clima }) => {
  return (
    <div>
      <li>
        <img src={clima.current?.condition.icon} alt="" />
        <span className="text-muted fst-italic text-uppercase"> {clima.current?.condition.text}</span>
        <h3>Ciudad: {clima.location?.name}</h3>
        <h4 className="text-muted">Provincia: {clima.location?.region}</h4>
        <h4 className="text-muted">Pais: {clima.location?.country}</h4>
        <span className="text-muted">{clima.current?.last_updated}</span>
      </li>
    </div>
  );
};

export default TarjetaCiudades;
