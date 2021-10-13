// import { SET_NETWORK} from "./actionTypes";
// import {NetworkActionType, Network} from "../reduxTypes";


// export const setNetwork = (network: Network): NetworkActionType => {
//   return {
//     type: SET_NETWORK,
//     payload: network
//   }
// }

// export const getStation = (id: string) => {

//   return async (dispatch:any) => {
//     try {
//       const res = await fetch(`https://api.citybik.es/v2/networks/${id}`)
//       const { network } = await res.json()
//       //localStorage.setItem("network", JSON.stringify(network))
//       dispatch( setNetwork(network) )
//     } catch (e) {}
//   }
// }

import { SET_NETWORK} from "./actionTypes";
import {NetworkActionType, Network} from "../reduxTypes";


export const setNetwork = (network: Network): NetworkActionType => {
  return {
    type: SET_NETWORK,
    payload: network
  }
}

export const getStation = (id: string) => {

  return async (dispatch:any) => {
    try {
      const res = await fetch(`https://api.citybik.es/v2/networks/${id}`)
      const { network } = await res.json()
      //localStorage.setItem("network", JSON.stringify(network))
      dispatch( setNetwork(network) )
    } catch (e) {}
  }
}

export const saveStation = (id: string) => {

  return async (dispatch:any) => {
    try {
      const res = await fetch(`https://api.citybik.es/v2/networks/${id}`)
      const { network } = await res.json()
      localStorage.setItem("network", JSON.stringify(network))
      dispatch( setNetwork(network) )
    } catch (e) {}
  }
}