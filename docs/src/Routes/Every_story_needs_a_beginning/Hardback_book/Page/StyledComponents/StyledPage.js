import styled, { css } from 'styled-components';

import { transStates} from '../../constants';

const StyledPage = styled.div`
    position: absolute;
    height: ${ props => props.theme.pageHeight }px;
    width: ${ props => props.theme.pageWidth }px;
    transition: transform ${ props => props.theme.pageTurnDuration / 2 / 1000 }s linear 0s;
                
    ${ props => !props.isOpen && css`
        display: none;
        transform: rotateY(0deg) !important;
    `}
`;

export { StyledPage };
