import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Weather from '../components/Weather'
import Reports from '../components/Reports'

import locations from '../data/locations'

export default function RightSidebar() {
  const currentLocation  = useSelector((state) => state.currentLocation)
  const location = locations.find(({ id }) => id === currentLocation)

  if (!location) return

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