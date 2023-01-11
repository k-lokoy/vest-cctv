import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { setUnits, setMaxReportAge, toggleTwitterAccount, VestCCTVState } from '../features/rootSlice'

import PageHeader from '../sections/PageHeader'
import Toggle from '../components/Toggle'

import { UNITS } from '../data/constants'

export default function Settings() {
  const settings = useSelector((state: VestCCTVState) => state)
  const dispatch = useDispatch()
  
  return (
    <>
      <PageHeader>
        <h2>Settings</h2>
      </PageHeader>
      
      <StyledMain>
        <div>
          <select
            name="units"
            value={settings.units}
            onChange={
              (e: React.FormEvent<HTMLSelectElement>) =>
                dispatch(setUnits(parseInt((e.target as HTMLSelectElement).value)))
            }
          >
            {Object.values(UNITS).map(unit =>
              <option key={unit.name} value={unit.name}>{unit.name}</option>)
            }
          </select>
          Units
        </div>

        <div>
          <select name="reportAge" value={settings.maxReportAge} onChange={(e) => dispatch(setMaxReportAge(parseInt(e.target.value)))}>
            <option value={8.64e+7}>1 Day</option>
            <option value={8.64e+7 * 7}>1 Week</option>
            <option value={8.64e+7 * 7 * 4}>1 Month</option>
          </select>
          Maximum report age
        </div>

        {settings.twitterAccounts.map(user => <div key={user.handle}>
          <Toggle
            id={user.handle}
            isChecked={user.isEnabled}
            onChange={() => dispatch(toggleTwitterAccount((user.handle)))}
          />
          <span>Include tweets from <a
            href={`https://twitter.com/${user.handle}`}
            target="_blank"
            rel="noreferrer"
          >@{user.handle}</a></span>
        </div>)}
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: flex-start;
  justify-items: flex-start;

  div {
    display: grid;
    grid-template-columns: minmax(2rem, auto) minmax(0, 100%);
    gap: 1em;
    align-items: center;
  }

  select {
    background-color: var(--color--100);
    padding: .5em;
    border-radius: .25em;
    border: .0625em solid var(--color--300);
    text-transform: capitalize;
  }
`