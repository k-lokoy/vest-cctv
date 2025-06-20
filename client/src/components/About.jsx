import styled from 'styled-components'

export default function About() {
  return (
    <>
      <h2>About</h2>

      <article>
        <p>Vest CCTV is a project aimed to consolidate various traffic data and information for the Bergen region in Norway.</p>
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
        </ul>

        <StyledCopyright>Copyright 2022-2025 © Lokøy Design</StyledCopyright>
      </article>
    </>
  )
}


const StyledCopyright = styled.p`
  font-size: .75rem;
  margin-block-start: 5em;
`