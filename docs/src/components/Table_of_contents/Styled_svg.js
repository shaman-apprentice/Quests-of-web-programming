import { Styled_opening_mechanism } from './Styled_opening_mechanism'

export const Styled_svg = Styled_opening_mechanism.extend`
  width: 100%;
  
  svg #routes > g {
    fill: transparent;
    transition: all 1s ease-in-out;
    cursor: pointer;
  }
  
  svg #routes > g:hover {
    opacity: 0.75;
    transform: scale(1.1);
  }
`;
