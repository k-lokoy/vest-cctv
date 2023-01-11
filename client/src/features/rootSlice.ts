import { createSlice } from '@reduxjs/toolkit'

import { UnitType } from '../data/constants'
import locations from '../data/locations'
import { accounts as twitterAccounts, TwitterAccount } from '../data/twitter'

export interface VestCCTVState {
  currentLocation: string | null
  lastRefreshed: number
  units: UnitType
  maxReportAge: number
  twitterAccounts: TwitterAccount[]
}

const initialState: VestCCTVState = {
  currentLocation: null,
  lastRefreshed: 0,
  units: UnitType.Metric,
  maxReportAge: 8.64e+7,
  twitterAccounts: [...twitterAccounts]
}

const reducers = {
  setCurrentLocation: (
    state: VestCCTVState,
    action: {payload: string}
  ) => {
    const location = locations.find(({ id }) => id === action.payload)
    if (location) state.currentLocation = location.id
  },

  setLastRefreshed: (
    state: VestCCTVState,
    action: {payload: number}
  ) => {
    state.lastRefreshed = action.payload
  },

  setUnits: (
    state: VestCCTVState,
    action: {payload: UnitType}
  ) => {
    state.units = action.payload || UnitType.Metric
  },

  setMaxReportAge: (
    state: VestCCTVState,
    action: {payload: number}
  ) => {
    state.maxReportAge = action.payload || initialState.maxReportAge
  },

  toggleTwitterAccount: (
    state: VestCCTVState,
    action: {payload: string}
  ) => {
    state.twitterAccounts = state.twitterAccounts.map(account => ({
      ...account,
      isEnabled: account.handle == action.payload ? !account.isEnabled : account.isEnabled
    }))
  },
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers,
})

export const {
  setCurrentLocation,
  setLastRefreshed,
  setUnits,
  setMaxReportAge,
  toggleTwitterAccount
} = rootSlice.actions

export default rootSlice.reducer
