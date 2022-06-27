import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import SiteHeader from './sections/SiteHeader'
import LeftSidebar from './sections/LeftSidebar'
import RightSidebar from './sections/RightSidebar'

import WatchingPage from './pages/Watching'
import SettingsPage from './pages/Settings'
import AboutPage from './pages/About'
import FallbackPage from './pages/Fallback'

export default function App() {
  return (
    <StyledApp className="App">
      <SiteHeader />
      <LeftSidebar />
      <Routes>
        <Route path="*" element={<FallbackPage />} />
        <Route path="/" element={<Navigate to="/watching" />} />
        <Route path="/watching" element={<WatchingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <RightSidebar />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: repeat(2, minmax(3rem, auto)) repeat(2, minmax(20rem, auto));
  align-content: start;
  grid-template-areas:
    "siteHeader siteHeader"
    "leftSidebar pageHeader"
    "leftSidebar main"
    "leftSidebar rightSidebar"
  ;
 

  @media (min-width: 48em) {
    height: 100vh;
    grid-template-columns: 12rem 1fr 14rem;
    grid-template-rows: repeat(2, minmax(3rem, auto)) minmax(20rem, 1fr);
    grid-template-areas:
      "siteHeader siteHeader siteHeader"
      "leftSidebar pageHeader pageHeader"
      "leftSidebar main rightSidebar"
    ;
  }

  @media (min-width: 64em) {
    grid-template-columns: 12rem 1fr 20rem;
  }
`
