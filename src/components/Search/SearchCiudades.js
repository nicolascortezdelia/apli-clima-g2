import React from 'react';

const SearchCiudades = ({ ciudades, SetElegida }) => {
  return (
    <div className="form-group col-md-4">
      <select id="ciudad"
              className="form-control"
              onChange={(e) => SetElegida(e.target.value)}>
        {ciudades.map((ciudad) => <option key="6be8c28794924ed8a2a184922222905">{ciudad.name}</option>)}
      </select>
    </div>
  );
};

export default SearchCiudades;
