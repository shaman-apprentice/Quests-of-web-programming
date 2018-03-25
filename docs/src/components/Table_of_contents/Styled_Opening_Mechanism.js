import styled, { css } from "styled-components";

export const Styled_Opening_Mechanism = styled.div`
  position: absolute;
  transition: top 2s;
  top: 0px;
  
  ${ props => !props.isOpen && css`
      z-index: 1;
      top: -1020px;
  `}
`;