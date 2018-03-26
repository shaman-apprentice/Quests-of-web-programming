import * as React from 'react'
import styled, { css } from "styled-components"

export const Styled_opening_mechanism = styled.div.attrs<{isOpen: boolean}>({})`
  position: absolute;
  transition: top 2s;
  top: 0px;
  
  ${ props => !props.isOpen && css`
      z-index: 1;
      top: -1020px;
  `}
`;