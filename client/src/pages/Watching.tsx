import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Video from '../components/Video'
import Map from '../components/Map'

import PageHeader from '../sections/PageHeader'
import { setCurrentLocation, VestCCTVState } from '../features/rootSlice'
import locations from '../data/locations'

const Watching: React.FC = () => {
  const dispatch = useDispatch()
  const currentLocation = useSelector((state: VestCCTVState) => state.currentLocation)
  const location  = locations.find(location => location.id === currentLocation) || locations[0]
  
  function handleSwitch(e: React.FormEvent<HTMLSelectElement>) {
    dispatch(setCurrentLocation((e.target as HTMLSelectElement).value))
  }

  return (
    <>
      <PageHeader>
        <h2>Camara:</h2>
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

export default Watching