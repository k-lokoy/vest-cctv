import styled from 'styled-components'

import PageHeader from '../sections/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader>
      <h2>About</h2>
      </PageHeader>
      <StyledMain>
        <article>
          <p>Vest CCTV is a project aimed to consolidate various traffic data and information for the Bergen region in Norway.</p>
          <br />
          <br />
          <br />
          <h3>Sources include</h3>
          <ul>
            <li><a
              href="https://www.vegvesen.no/trafikkinformasjon/reiseinformasjon/webkamera/#/"
              target="_blank"
              rel="noreferrer"
            >Statens vegvesen cameras</a></li>
            <li><a
              href="https://www.bt.no/emne/webkamera"
              target="_blank"
              rel="noreferrer"
            >Bergens Tidende cameras</a></li>
            <li><a
              href="https://www.vestnytt.no/kamera/"
              target="_blank"
              rel="noreferrer"
            >Vestnytt cameras</a></li>
            <li>Bing maps embed with traffic data</li>
            <li>Bing traffic reports</li>
            <li>Tweets from <a
              href="https://twitter.com/VTSvest"
              target="_blank"
              rel="noreferrer"
            >Vegtrafikksentralen vest</a></li>
            <li>Tweets from <a
              href="https://twitter.com/politivest"
              target="_blank"
              rel="noreferrer"
            >Vest politidistrikt</a></li>
          </ul>

          <StyledCopyright>Copyright 2022 © Lokøy Design</StyledCopyright>
        </article>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 1em;

  h3 {
    font-size: .9rem;
  }
`

const StyledCopyright = styled.p`
  font-size: .75rem;
  margin-block-start: 5em;
`