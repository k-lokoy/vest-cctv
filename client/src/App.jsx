import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import SiteHeader from './sections/SiteHeader'
import RightSidebar from './sections/RightSidebar'

import WatchingPage from './pages/Watching'
import FallbackPage from './pages/Fallback'

export default function App() {
  return (
    <StyledApp className="App">
      <SiteHeader />
      <Routes>
        <Route path="*" element={<FallbackPage />} />
        <Route path="/" element={<Navigate to="/watching" />} />
        <Route path="/watching" element={<WatchingPage />} />
      </Routes>
      <RightSidebar />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto 50vh;
  align-content: start;
  grid-template-areas:
    "siteHeader"
    "main"
    "rightSidebar"
  ;
 

  @media (min-width: 48em) {
    height: 100vh;
    grid-template-columns: 1fr 20rem;
    grid-template-rows: 3rem calc(100vh - 3rem);
    grid-template-areas:
      "siteHeader siteHeader"
      "main rightSidebar"
    ;
  }
`
