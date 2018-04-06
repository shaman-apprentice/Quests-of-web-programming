import styled from 'styled-components'

// z-index for being always on top of Table_of_contents
export const Styled_Header = styled.div`
  position: relative;
  top: 0px;
  z-index: 2;
  
  cursor: pointer;
  
  margin: 0px;
  
  background-color: black;
  color: greenyellow;
  text-align: center;
  
  display: grid;
  grid-template-columns: 200px auto;
  
  > :nth-child(1) {
    grid-column: 1 / 1;
  }
  
  > :nth-child(2) {
    grid-column: 2 / 2;
  }
`