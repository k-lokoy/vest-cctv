import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faCog, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import { formatDateTime } from '../utils'
import { VestCCTVState } from '../features/rootSlice'

const LeftSidebar: React.FC = () => {
  const lastRefreshed = useSelector((state: VestCCTVState) => state.lastRefreshed)

  return (
    <StyledSidebar>
      <StyledNav>
        <StyledLink to="/watching">
          <FontAwesomeIcon icon={faVideo} />
          <span>Watching</span>
        </StyledLink>
        <StyledLink to="/settings">
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </StyledLink>
        <StyledLink to="/about">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>About</span>
        </StyledLink>
      </StyledNav>
      <StyledLastUpdated>
        <p>Last refreshed</p>
        <p>{formatDateTime(new Date(lastRefreshed), true)}</p>
      </StyledLastUpdated>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  background-color: var(--color--700);
  grid-area: leftSidebar;
  padding: 1.5em 1em;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin-block-end: 2em;

  a {
    color: var(--color--300);
  }
`

const StyledLink = styled(NavLink)`
  display: flex;
  gap: .5em;
  align-items: center;
  text-decoration: none;
  
  &.active,
  &:hover {
    text-decoration: none;
    color: var(--color--100);
  }

  span {
    display: none;

    @media (min-width: 48em) {
      display: inline-block;
    }
  }
`

const StyledLastUpdated = styled.div`
  display: none;
  color: var(--color--200);
  border-block-start: .0625em solid var(--color--300);
  font-size: .85rem;
  padding-block-start: 1em;
  font-weight: 500;

  @media (min-width: 48em) {
    display: block;
  }

  p {
    margin: 0;
  }

  p:first-child {
    font-size: .65rem;
    color: var(--color--300);
    text-transform: uppercase;
    margin-block-end: .5em;
    
  }
`

export default LeftSidebar