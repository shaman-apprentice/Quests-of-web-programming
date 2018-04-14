import React from 'react'
import styled from 'styled-components'

import backgroundImgForLeftPage from '!url-loader!./assets/oldLeftPage.jpg'
import backgroundImgForRightPage from '!url-loader!./assets/oldRightPage.jpg'

export const Styled_page = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url("${ props => props.isLeft ? backgroundImgForLeftPage : backgroundImgForRightPage }");
    text-align: center;
    p:first-child { margin-top: 3em; }  
`;