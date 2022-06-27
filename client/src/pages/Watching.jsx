import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Video from '../components/Video'
import Map from '../components/Map'

import PageHeader from '../sections/PageHeader'
import { setCurrentLocation } from '../features/rootSlice'
import locations from '../data/locations'

export default function Watching() {
  const dispatch = useDispatch()
  const currentLocation = useSelector((state) => state.currentLocation)
  const location  = locations.find(location => location.id == currentLocation)
  
  function handleSwitch(e) {
    dispatch(setCurrentLocation(e.target.value))
  }

  return (
    <>
      <PageHeader>
        <h2>Cemara:</h2>
        {location && <select onChange={handleSwitch} defaultValue={location.id}>
          {locations.map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
        </select>}
      </PageHeader>
      <StyledMain>
        {!location && <h2>Loading location...</h2>}
        {location && <Video src={location.src} type={location.type}/>}
        {location && <Map lat={location.lat} lon={location.lon}/>}
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
`