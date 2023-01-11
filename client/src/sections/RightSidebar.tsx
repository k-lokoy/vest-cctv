import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Weather from '../components/Weather'
import Reports from '../components/Reports'

import locations from '../data/locations'
import { VestCCTVState } from '../features/rootSlice'

export default function RightSidebar() {
  const currentLocation  = useSelector((state: VestCCTVState) => state.currentLocation)
  const location = locations.find(({ id }) => id === currentLocation) || locations[0]

  if (!location) return (<></>)

  return (
    <StyledSidebar>
      <Weather lat={location.lat} lon={location.lon}/>
      <Reports />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  overflow-y: scroll;
  border-inline-start: .0625em solid var(--color--300);
`