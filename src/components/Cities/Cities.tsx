// import React from 'react';


// const Cities = ( { location }) => {

//   const { city, country} = location

//   return (
//     <li className="cities-list__item" tabIndex={0}>{`${city}: ${country}`}</li>
//   )
// }

// export default Cities;

import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getStation, setNetwork } from "../../redux/actions/actionCreator";

interface ICityType {
  index?: number,
  location: {
    city: string,
    country: string,
    [propName: string]: any
  },
  stationId: string
}

const Cities = ({ location, index, stationId }: ICityType) => {

  const dispatch = useDispatch()

  const { city, country } = location
  const initState = index === 0
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    initState && dispatch(getStation(stationId))
  }, [])

  const handleGetStation = (evt: React.MouseEvent<HTMLLIElement>) => {
    evt.stopPropagation()

    if (isActive) {
      dispatch(setNetwork({ company: [], stations: [] }))
      dispatch(getStation(stationId))
    }
  }

  const handleChangeActive = (evt: React.FocusEvent) => {
    evt.stopPropagation()
    setActive(!isActive)
  }

  return (
    <li className="cities-list__item"
      tabIndex={0}
      onClick={handleGetStation}
      onFocus={handleChangeActive}
      onBlur={handleChangeActive}
    >{`${city}: ${country}`}</li>
  )
}

export default Cities