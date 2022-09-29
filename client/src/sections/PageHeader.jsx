import styled from 'styled-components'

export default function PageHeader({ children }) {
  return (<StyledHeader>{children}</StyledHeader>)
}

const StyledHeader = styled.header`
  grid-area: pageHeader;
  background-color: var(--color--100);
  padding: 1.5em 1em;
  display: flex;
  align-items: center;
  box-shadow: 0 .25em 1em -.5em var(--color--300);
  z-index: 100;
  gap: .5em;

  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }

  select {
    color: var(--color--500);
    border: none;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color--200);
    }
  }
`