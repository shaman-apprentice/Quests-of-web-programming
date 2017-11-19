import React from 'react'
import styled from 'styled-components'

import backgroundImg from '!url-loader!./assets/InnerCover.jpg'

const StyledOuterCover = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("${backgroundImg}");
`;

const OuterCover = (props) => (
    <StyledOuterCover/>
);

export  default OuterCover;