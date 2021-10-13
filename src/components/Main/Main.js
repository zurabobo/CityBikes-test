import React from 'react';

import './Main.css';
import CitiesList from '../CitiesList/CitiesList';
import StationList from '../StationsList/StationsList';


function Main() {
  return (
      <section className="main">
        <CitiesList />
        <StationList />
      </section>
  )
}

export default Main;
