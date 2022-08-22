import React from 'react';

const Search = () => {
  return (
    <select className="form-select" aria-label="Default select example">
        <option selected>Busca tu ciudad</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  );
};

export default Search;
