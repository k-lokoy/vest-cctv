import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Toggle from '../components/Toggle'
import { setContent } from '../features/rootSlice'
import { formatDateTime } from '../utils'

export default function SiteHeader() {
  const [ dateTimeStr, setDateTimeStr ] = useState('1 Jan, 00:00');
  const content  = useSelector((state) => state.content);
  const dispatch = useDispatch()

  useEffect(function() {
    const getAndSetTime = () => 
      setDateTimeStr(formatDateTime(new Date(), true))

    getAndSetTime()
    setInterval(getAndSetTime, 1000)
  }, [])

  return (
    <StyledHeader>
      <h1 style={{flex: '1'}}>Vest CCTV</h1>
      <StyledContentSwitchWrapper>Map <Toggle
        isChecked={content === 'MAP'}
        id="content-switch"
        onChange={() => {
          dispatch(setContent(content === 'VIDEO' ? 'MAP' : 'VIDEO'))
        }}
      /></StyledContentSwitchWrapper>
      <StyledClock>{dateTimeStr}</StyledClock>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color--600);
  color: var(--color--200);
  padding: 1em;
  grid-area: siteHeader;
  gap: 1rem;

  h1 {
    text-transform: uppercase;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`

const StyledContentSwitchWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: .5em;
  justify-self: flex-end;
`

const StyledClock = styled.div`
  background-color: var(--color--700);
  color: var(--color--300);
  padding: .25em .5em;
`