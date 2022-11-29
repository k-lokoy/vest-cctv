import { createSlice } from '@reduxjs/toolkit'

import { UNITS } from '../data/constants'
import locations from '../data/locations'
import { accounts as twitterAccounts } from '../data/twitter'

const initialState = {
  currentLocation: locations[0].id,
  lastRefreshed: 0,
  units: 'metric',
  maxReportAge: 8.64e+7,
  twitterAccounts: [...twitterAccounts]
}

const reducers = {
  setCurrentLocation: function(state, action) {
    const location = locations.find(({ id }) => id === action.payload)
    if (location) state.currentLocation = location.id
  },
  setLastRefreshed: function(state, action) {
    state.lastRefreshed = action.payload
  },
  setUnits: function(state, action) {
    state.units = action.payload || UNITS.METRIC
  },
  setMaxReportAge: function(state, action) {
    state.maxReportAge = action.payload || initialState.maxReportAge
  },
  toggleTwitterAccount: function(state, action) {
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
