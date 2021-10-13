// import React from 'react';
// import './CitiesList.css';
// import Title from '../Title/Title';
// import Preloader from '../Preloader/Preloader';
// import Cities from '../Cities/Cities';
// import citiesApi from '../../utils/CitiesApi';
// // const [CitiesData, setCitiesData] = React.useState({
// //   company: data.company || 'No data available',
// //   country: data.country || 'No data available',
// //   city: data.city || 'No data available',
// //   id: data.id,
// // })



// function CitiesList() {

//   const [networks, setNetworks] = React.useState([])

//   const getCities = async () => {
//     const res = await fetch('https://api.citybik.es/v2/networks?fields=id,company,location')
//     const { networks } = await res.json()
//     //localStorage.setItem("networks", JSON.stringify(networks))
//     setNetworks(networks)
//   }

//   React.useEffect(() => {
//     getCities()
//   }, [])

//   return (
//     <div className="cities">
//       {/* <Title company={network.company} /> */}
//       <div className="cities-list__container">
//         <ul className="cities-list">
//           {networks.length !== 0 ?
//             networks.map((network, index) => (
//               <Cities
//                 location={network.location}
//                 key={index}
//               />
//             )) : <Preloader />
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default CitiesList;


import React, { useEffect, useState } from 'react';
import './CitiesList.css';
import Cities from '../Cities/Cities';
import CitiesTitle from '../CitiesTitle/CitiesTitle';
import Preloader from '../Preloader/Preloader';

interface INetwork {
  company: string[],
  id: string,
  location: {
    city: string,
    country: string,
    [propName: string]: any
  }
}


const CitiesList = () => {
  const [networks, setNetworks] = useState<INetwork[]>([])

  const getCityBikesCities = async () => {
    const res = await fetch('https://api.citybik.es/v2/networks?fields=id,company,location')
    const { networks } = await res.json()
    setNetworks(networks)
  }


  useEffect(() => {
    getCityBikesCities()
  }, [])


  return (
    <div className="cities">
      <CitiesTitle />
      <div className="cities-list__container">
        <ul className="cities-list">
          {networks.length !== 0 ?
            networks.map((network, index) => (
              <Cities
                key={index}
                location={network.location}
                index={index}
                stationId={network.id}
              />
            ))
            : <Preloader />
          }
        </ul>
      </div>
    </div>
  )
}

export default CitiesList
