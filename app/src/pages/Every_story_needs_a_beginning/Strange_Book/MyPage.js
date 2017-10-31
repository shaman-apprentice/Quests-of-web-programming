import React from 'react'
import styled from 'styled-components'

import backgroundImgForLeftPage from './imgs/oldLeftPage.jpg'
import backgroundImgForRightPage from './imgs/oldRightPage.jpg'

const StyledMyPage = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url("${ props => props.isLeft ? backgroundImgForLeftPage : backgroundImgForRightPage }");
    text-align: center;
    p:first-child { margin-top: 3.8em; }  
`;

const MyPage = ({ isLeft, children }) => (
    <StyledMyPage isLeft={isLeft}>
        { children }
    </StyledMyPage>
);

export  default MyPage;