import React from 'react';
import BikesLogo from '../../images/bikes-logo.svg';
import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title header__title-shadow">CityBikes</h1>
        <img alt="логотип spacex" className="header__logo" src={BikesLogo} />
      </div>
    </header>
  )
}

export default Header;
