import { css } from "styled-components"

import { Styled_svg_props } from './'

export const css_opening_mechanism = (props: Styled_svg_props) => css`
  position: absolute;
  transition: top 2s;
  top: 0px;
  
  ${ !props.is_open && css`
      z-index: 1;
      top: -1020px;
  `}
`;