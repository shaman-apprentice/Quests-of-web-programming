import styled from 'styled-components'

export const Styled_layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2em;
  padding: 1em;
  
  * > :nth-child(1) {
    grid-column: 1 / 1;
  }
  
  * > :nth-child(2) {
    grid-column: 2 / 2;
  }
`