import React from 'react'
import styled from 'styled-components'

import backgroundImg from '!url-loader!./assets/BackCover.jpg'

const StyledBackCover = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("${backgroundImg}");
`;

const BackCover = (props) => (
    <StyledBackCover/>
);

export default BackCover;