import styled, { css } from 'styled-components';

const StyledBook = styled.div`
    cursor: pointer;

    position: relative;
    height: ${ props => props.theme.pageHeight }px;
    width: ${ props => 2 * props.theme.pageWidth }px;
    
    transition: margin-left ${ props => props.theme.pageTurnDuration / 2 / 1000 }s linear 0s;
    margin-left: 0px;
    ${ props => props.isClosed_top && css`
        margin-left: ${ props => -props.theme.pageWidth / 2 }px;
    ` }
    
    ${ props => props.isClosed_turnedAround && css`
        margin-left: ${ props => props.theme.pageWidth / 2 }px;
    ` }
`;

export { StyledBook };