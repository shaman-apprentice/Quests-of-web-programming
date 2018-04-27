import styled from 'styled-components'

import { css_opening_mechanism } from './css_opening_mechanism'
import { css_floating_ghosts } from './css_floating_ghosts'

export interface Styled_svg_props {
    is_open: boolean,
}

export const Styled_svg = styled.div.attrs<Styled_svg_props>({})`
  z-index: 1;
  width: 100%;
  
  svg #routes > * {
    fill: transparent;
    transition: all 1s ease-in-out;
    cursor: pointer;
  }
  
  svg #routes > *:hover {
    opacity: 0.75;
    transform: scale(1.03);
  }
  
  ${ props => css_opening_mechanism(props) }
  ${ ()    => css_floating_ghosts() }
`;
