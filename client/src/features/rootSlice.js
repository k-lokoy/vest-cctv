import { createSlice } from '@reduxjs/toolkit'

import locations from '../data/locations'

const initialState = {
  currentLocation: null,
  lastRefreshed: 0,
  content: 'VIDEO'
}

const reducers = {
  setCurrentLocation: function(state, action) {
    const location = locations.find(({ id }) => id === action.payload)
    if (location) state.currentLocation = location.id
  },
  setLastRefreshed: function(state, action) {
    state.lastRefreshed = action.payload
  },
  setContent: function(state, action) {
    state.content = action.payload
  }
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers,
})

export const {
  setCurrentLocation,
  setLastRefreshed,
  setContent
} = rootSlice.actions

export default rootSlice.reducer
