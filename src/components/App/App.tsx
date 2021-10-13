// import React, { useState, useEffect } from 'react';
// import './App.css';

// import Header from '../Header/Header';
// // import CitiesList from '../CitiesList/CitiesList';
// import Main from '../Main/Main';
// import citiesApi from '../../utils/CitiesApi';
// import CitiesList from '../CitiesList/CitiesList';

// function App() {

//   return (
//     <div className="page">
//       <Header />
//       <Main

//       />
//       {/* <CitiesList
//       cities={cities}
//       /> */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {

  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
