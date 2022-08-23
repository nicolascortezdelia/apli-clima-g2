import React from 'react';
import classNames from 'classnames';
import { useThemeContext } from '../../providers/ThemeProviders';

const Search = () => {
  const theme = useThemeContext();

  return (
    <div className="card justify-content-center mt-3">
      <div className={classNames('card', {
        'bg-light': theme === 'light',
        'bg-dark text-white': theme === 'dark',
      })}>
        <div className="card-body">
        <select className="form-select mt-xl-3" aria-label="Default select example">
            <option selected>Busca tu ciudad</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        </div>
        </div>
    </div>
  );
};

export default Search;
