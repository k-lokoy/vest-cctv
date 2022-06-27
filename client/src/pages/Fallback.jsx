import styled from 'styled-components'

import PageHeader from '../sections/PageHeader'

export default function Fallback() {
  return (
    <>
      <PageHeader>
        <h2>404 NOT FOUND</h2>
      </PageHeader>
      <StyledMain>
        <p>We were unable to find what you were looking for.</p>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: 1em;
`