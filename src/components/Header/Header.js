import classNames from 'classnames';
import React from 'react';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProviders';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  console.log(theme);
  return (
    <nav className={classNames('navbar navbar-light', {
      'bg-light': theme === 'light',
      'bg-dark text-white': theme === 'dark',
    })}>
            <div className="container container-fluid">
            <span className="my-3 h1">Clima por ciudades</span>
            <div className="justify-content-end">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange}/>
                </div>
            </div>
            </div>
      </nav>
  );
};

export default Header;
