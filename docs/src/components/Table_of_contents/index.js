import * as React from 'react'
import styled, { css } from 'styled-components'

import table_of_contents_svg from './table_of_contents.svg'

const Opening_Mechanism = styled.div`
  position: absolute;
  transition: top 4s;
  top: 0px;
  
  ${ props => !props.isOpen && css`
      z-index: 1;
      top: -1020px;
  `}
`;

/*
  ${ props => props.isOpen ? css`
      z-index: 1;
      top: -1020px;
  `}
  */

export function Table_of_contents({ isOpen }) {
    return (
        <Opening_Mechanism
            isOpen={isOpen}
            dangerouslySetInnerHTML={{ __html: table_of_contents_svg }}
        />
    );
}