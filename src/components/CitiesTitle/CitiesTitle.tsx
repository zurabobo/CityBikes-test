// import React from 'react';
// import './Title.css';

// function Title({ title }) {
//   return (
//     <h2 className="title">{title}</h2>
//   )
// }

// export default Title;


import React from 'react';
import { useSelector } from "react-redux";
import { Network } from "../../redux/reduxTypes";
import { AppState } from "../../redux/reducers/rootReducer";
import Preloader from '../Preloader/Preloader';
import './CitiesTitle.css';


function CitiesTitle() {

  const { company, location } = useSelector<AppState, Network>(state => state.network)

  return (
    <>
      {
        company.length !== 0 ?          
            <h2 className="cities-title">{`${company.toString()} - ${location?.city} - ${location?.country}`}</h2>
           : <Preloader />
      }
    </>
  )
}

export default CitiesTitle;