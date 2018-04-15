import * as React from 'react'
import styled from 'styled-components'

export const Styled_layout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  
  > :nth-child(1) {
    grid-column: 1 / 1;
    padding: 0 50px 0 25px;
    max-height: 75vh;
  }
  
  > :nth-child(2) {
    grid-column: 2 / 2;
  }
`