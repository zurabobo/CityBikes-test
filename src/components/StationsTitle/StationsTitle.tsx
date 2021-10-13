import React from 'react';
import { useSelector } from "react-redux";
import { Network } from "../../redux/reduxTypes";
import { AppState } from "../../redux/reducers/rootReducer";
import Preloader from '../Preloader/Preloader';
import './StationsTitle.css';


function StationsTitle() {

  const { company, stations } = useSelector<AppState, Network>(state => state.network)

  return (
    <>
      {
        company.length !== 0 ?
          <>
            <h2 className="stations-title">{`Number of stations - ${stations.length}`}</h2>
          </> : <Preloader />
      }
    </>
  )
}

export default StationsTitle;