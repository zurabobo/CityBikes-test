import React, { useState } from 'react';
import './Stations.css';

type Station = {
  station: string
}

function Stations({ station }: Station) {

  const [isLiked, setIsLiked] = useState(false)

  const stationLikeBtnClassName = `${isLiked ? "station__favorite-btn station__favorite-btn_active" : "station__favorite-btn"}`;

  const handleLikeStation = (): void => {
    setIsLiked(!isLiked)
  }

  return (
    <li className="station__item">{station}
      <div className={stationLikeBtnClassName} onClick={handleLikeStation}>
        <svg viewBox="0 0 18 18">
          <path d="M6.555,12.558c-0.098,0-0.195-0.034-0.273-0.103c-0.233-0.2-5.718-4.954-6.199-7.885
        C-0.133,3.243,0.071,2.201,0.69,1.474C1.22,0.85,2.034,0.507,2.982,0.507c0.082,0,0.165,0.002,0.247,0.008
        c0.058-0.003,0.115-0.004,0.172-0.004c1.048,0,2.343,0.461,3.109,2.421c0.43-1.196,1.311-2.417,3.328-2.417
        c1.135,0,2.023,0.342,2.571,0.987c0.597,0.701,0.787,1.733,0.569,3.068c-0.479,2.929-5.918,7.684-6.149,7.884
        C6.751,12.524,6.653,12.558,6.555,12.558z"/>
        </svg>
      </div>
    </li>
  )
}

export default Stations

// import React, { useState } from 'react';
// import './Stations.css';



// type Station = {
//   station: string,
//   isSavedStations: string, 
//   likedStations: string, 
//   onSaveStation: string, 
//   onDeleteSavedStation: string,
// }

// function Stations({ station,  isSavedStations, likedStations, onSaveStation, onDeleteSavedStation }: Station) {

//   //const [isLiked, setIsLiked] = useState(false)
//   const isLiked = !isSavedStations && likedStations(station)
//   //const [saveStation, setSavedStation] = useState([])

//   const stationLikeBtnClassName = `${isLiked ? "station__favorite-btn station__favorite-btn_active" : "station__favorite-btn"}`;
//   const handleSaveStationClick = () => {
//     onSaveStation({
//       name: station.name,
//       isSaved: station.isSaved,
//     })
//   }

//   function handleDeleteClick() {
//     onDeleteSavedStation(station);
//   }

//   // const handleToggleSave = (): void => {
//   //   //const newStation = [newStation.station, ...station]
//   //   //const clickedMovie = isLiked;
//   //   if (!isLiked) {
     
//   //     localStorage.setItem("stations", JSON.stringify([station]))
//   //     setIsLiked(!isLiked)
//   //     setSavedStation(saveStation);
//   //   } else {
//   //     setIsLiked(false);
//   //   }
//   // }

//   // const handleLikeStation = (): void => {
//   //   setIsLiked(!isLiked)
//   // }

//   return (
//     <li className="station__item">{station}
//     {!isSavedStations ? (
//       <div className={stationLikeBtnClassName} onClick={handleDeleteClick}>
//         <svg viewBox="0 0 18 18">
//           <path d="M6.555,12.558c-0.098,0-0.195-0.034-0.273-0.103c-0.233-0.2-5.718-4.954-6.199-7.885
//         C-0.133,3.243,0.071,2.201,0.69,1.474C1.22,0.85,2.034,0.507,2.982,0.507c0.082,0,0.165,0.002,0.247,0.008
//         c0.058-0.003,0.115-0.004,0.172-0.004c1.048,0,2.343,0.461,3.109,2.421c0.43-1.196,1.311-2.417,3.328-2.417
//         c1.135,0,2.023,0.342,2.571,0.987c0.597,0.701,0.787,1.733,0.569,3.068c-0.479,2.929-5.918,7.684-6.149,7.884
//         C6.751,12.524,6.653,12.558,6.555,12.558z"/>
//         </svg>
//       </div>
//     ) : (
//       <div className={stationLikeBtnClassName} onClick={handleSaveStationClick}>
//         <svg viewBox="0 0 18 18">
//           <path d="M6.555,12.558c-0.098,0-0.195-0.034-0.273-0.103c-0.233-0.2-5.718-4.954-6.199-7.885
//         C-0.133,3.243,0.071,2.201,0.69,1.474C1.22,0.85,2.034,0.507,2.982,0.507c0.082,0,0.165,0.002,0.247,0.008
//         c0.058-0.003,0.115-0.004,0.172-0.004c1.048,0,2.343,0.461,3.109,2.421c0.43-1.196,1.311-2.417,3.328-2.417
//         c1.135,0,2.023,0.342,2.571,0.987c0.597,0.701,0.787,1.733,0.569,3.068c-0.479,2.929-5.918,7.684-6.149,7.884
//         C6.751,12.524,6.653,12.558,6.555,12.558z"/>
//         </svg>
//       </div>
//     )}
//     </li>
//   )
// }

// export default Stations
