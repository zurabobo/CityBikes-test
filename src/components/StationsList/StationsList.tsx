import React from 'react';
import './StationsList.css';
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import { Network } from "../../redux/reduxTypes";
import Stations from '../Stations/Stations';
import Preloader from '../Preloader/Preloader';
import StationsTitle from '../StationsTitle/StationsTitle';

function StationList() {

  const { stations, company } = useSelector<AppState, Network>(state => state.network)

  return (
    <div className="station">
      <StationsTitle />
      <div className="station-list__container">
        {
          company.length !== 0 ?
            <ul className="station-list">
              {
                stations.length !== 0 &&
                stations.map((station, index) => (
                  <Stations
                    key={index}
                    station={station.name}
                  />
                ))
              }
            </ul> : <Preloader />
        }
      </div>
    </div>
  )
}

export default StationList