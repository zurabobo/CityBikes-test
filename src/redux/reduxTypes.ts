import {SET_NETWORK} from "./actions/actionTypes";

type stations = {
  name: string
}

export type Network =  {
  company: Array<string>,
  location?: {
    city?: string,
    country?: string,
  },
  stations: Array<stations>
}

export interface ISetStationsAction {
  type: typeof SET_NETWORK,
  payload: Network,
}

export type NetworkActionType = ISetStationsAction
