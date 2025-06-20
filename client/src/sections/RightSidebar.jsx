import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrentLocation } from '../features/rootSlice'
import locations from '../data/locations'
import About from '../components/About'

export default function RightSidebar() {
  const currentLocation  = useSelector((state) => state.currentLocation)
  const location = locations.find(({ id }) => id === currentLocation) || locations[0]
  const dispatch = useDispatch()

  if (!location) return

  return (
    <StyledSidebar>
      <h2>Cameras ({locations.length})</h2>

      {locations.map(location => (
        <StyledCameraButton
          key={location.id}
          className={location.id === currentLocation ? 'active' : ''}
          onClick={() => {
            dispatch(setCurrentLocation(location.id))
          }}><h3>{location.title}</h3></StyledCameraButton>))}

      <br/>
      <br/>
      <br/>

      <About />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  overflow-y: scroll;
  border-inline-start: .0625em solid var(--color--300);
  padding: 1rem;
`

const StyledCameraButton = styled.button`
  display: flex;
  background-color: var(--color--600);
  color: var(--color--100);
  margin-bottom: .5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;

  &.active {
    background-color: var(--color-green);
    color: var(--color--800);
  }

  h3 {
    margin: 0;
  }
`