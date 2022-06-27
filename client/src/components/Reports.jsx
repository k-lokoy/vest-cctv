import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setLastRefreshed } from '../features/rootSlice'
import { formatDateTime } from '../utils'

import { mapArea } from '../data/reports'

export default function Reports() {
  const [ reports, setReports ] = useState([])
  const { twitterAccounts, maxReportAge } = useSelector((state) => state)
  const dispatch = useDispatch()

  async function updateReports() {
    try {
      const newReports = (await Promise.all([
        ...twitterAccounts
            .filter(({ isEnabled }) => isEnabled)
            .map(({ handle }) => fetch(`/api/tweets?handle=${handle}`).then(res => res.json())),
        fetch(`/api/bingreports?mapArea=${mapArea.flat().join(',')}`)
          .then(res => res.json())
      ])).flat()

      newReports.sort((a, b) => b.time - a.time)
      
      const now = Date.now()
      setReports(newReports.filter(({ time }) => now - time < maxReportAge))
      dispatch(setLastRefreshed(now))
    
    } catch(err) {
      console.error(err)
    }
    
    setTimeout(() => updateReports(), 300000) // 5 min
  }

  useEffect(function() {
    updateReports()
  }, [twitterAccounts, maxReportAge])

  return (
    <StyledReportsContainer>
      <h4>Reports</h4>
      {reports.map(report => <StyledReport key={report.id} type={report.type}>
        <StyledReportDate>{formatDateTime(new Date(report.time))}</StyledReportDate>
        {report.author && <StyledReportAuthor href={report.url} target="_blank">{report.author.name}</StyledReportAuthor>}
        {report.title && <StyledReportTitle>{report.title}</StyledReportTitle>}
        <p>{report.text}</p>
      </StyledReport>)
      }
    </StyledReportsContainer>)
}

const StyledReportsContainer = styled.div`
  h4 {
    margin: 1em;
  }

  > * + * {
    margin-block-end: 1em;
  }
`

const accentColors = [
  {color: 'var(--color-red)',    types: [1, 2, 3, 4]},
  {color: 'var(--color--300)',   types: [5, 6, 7]},
  {color: 'var(--color-orange)', types: [8, 9, 10]},
  {color: 'var(--color-blue)',   types: [11, 12]},
]

const StyledReport = styled.div`
  position: relative;
  border-block-end: .0625em solid var(--color--300);
  padding: 1em;
  padding-inline-start: 2em;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 48em) {
    font-size: .75rem;
  }

  &::before {
    position: absolute;
    inset-block-start: 1em;
    inset-inline-start: 1em;
    height: calc(100% - 2em);
    display: block;
    content: '';
    border-inline-start: .25em solid ${props => 
      accentColors.find(entry => entry.types.includes(props.type))?.color || 'var(--color--300)'
    }
  }

  p {
    margin: 0;
  }
`

const StyledReportDate = styled.span`
  font-weight: 600;
  margin-block-end: .5em;
`

const StyledReportAuthor = styled.a`
  font-weight: 500;
`

const StyledReportTitle = styled.p`
  font-weight: 500;
`