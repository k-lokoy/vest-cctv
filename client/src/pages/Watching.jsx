import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Video from '../components/Video'
import Map from '../components/Map'

import locations from '../data/locations'

export default function Watching() {
  return (
    <StyledMain>
      <WatchingContent />
    </StyledMain>
)
}

function WatchingContent() {
  const [currentLocation, content] = useSelector((state) => [state.currentLocation, state.content]);
  const location  = locations.find(location => location.id === currentLocation) || locations[0];

  if (!content) {
    return <h2>Loading location...</h2>;
  }

  if (content === 'MAP') {
    return <Map lat={location.lat} lon={location.lon} />;
  }

  return <Video src={location.src} type={location.type} />;
}

const StyledMain = styled.main`
  background-color: var(--color--800);
  grid-area: main;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`