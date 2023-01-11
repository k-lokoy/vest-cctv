import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { formatDateTime } from '../utils'

const SiteHeader: React.FC = () => {
  const [ dateTimeStr, setDateTimeStr ] = useState('1 Jan, 00:00')

  useEffect(function() {
    const getAndSetTime = () => 
      setDateTimeStr(formatDateTime(new Date, true))

    getAndSetTime()
    setInterval(getAndSetTime, 1000)
  }, [])

  return (
    <StyledHeader>
      <h1>Vest CCTV</h1>
      <StyledClock>{dateTimeStr}</StyledClock>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color--600);
  color: var(--color--200);
  padding: 1em;
  grid-area: siteHeader;

  h1 {
    text-transform: uppercase;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`

const StyledClock = styled.div`
  background-color: var(--color--700);
  color: var(--color--300);
  padding: .25em .5em;
`

export default SiteHeader