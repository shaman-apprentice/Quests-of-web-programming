import React from 'react'
import styled from 'styled-components'

import front_cover_bckgr_img from '!url-loader!./assets/FrontCover.jpg'

const StyledFrontCover = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url("${front_cover_bckgr_img}");
    font-size: 1.5em;
    text-align: center;
    
    * { margin-left: 60px; }
    
    h3 {
        margin-bottom: 0.5em;
        color: antiquewhite;
    }
    
    p {
        font-style: italic;
        margin-top: 3em;
        color: sandybrown;
    }
    
    h4 {
        font-style: italic;
        font-weight: bold;
        color: sandybrown;
    }
`;

const FrontCover = () => (
   <StyledFrontCover>
        <h3 style={{marginTop: '1.5em'}}>The magical secrets</h3>
        <h3>of becoming a good</h3>
        <h3>web programmer</h3>
        <p>well, at least</p>
        <h4>not as bad as</h4>
        <h4 style={{marginTop: '-1em'}}>you were yesterday</h4>
    </StyledFrontCover>
)

export  default FrontCover;