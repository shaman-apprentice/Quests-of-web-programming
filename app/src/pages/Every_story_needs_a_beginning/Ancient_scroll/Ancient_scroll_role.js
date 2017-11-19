import React from 'react'
import styled, { css } from 'styled-components'

/* dimensions of background-image */
const w = 900;
const h = 346;

const Centering_div = styled.div`
    position: absolute;
    * {
        position: absolute;
    }
    width: 100%;
    height: 100%;
`;

const Styled_side_border = styled.div`
    height: 100%;
    width: 130px;
    right: 0px;
    background-color: burlywood;
`;

const Styled_role_animation = styled.div`
    height: 100%;
    width: 260px;
    right: 0px;
    background-image: url('${require('./scroll_role_rotating_part.png')}');
    transition: transform ${ props => props.timeout}ms linear 0ms;
    transform: rotateY(${ props => props.rotations*360 }deg);
`;

export function Ancient_scroll_role(props) {
    return (
        <Centering_div>
            <Styled_side_border>
                <Styled_side_border/>
                <Styled_role_animation timeout={props.animation_time} rotations={props.rotations}/>
            </Styled_side_border>
        </Centering_div>
    )
}