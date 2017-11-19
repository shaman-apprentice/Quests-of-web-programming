import React from 'react'
import styled, { css } from 'styled-components'
import Transition from 'react-transition-group/Transition'

import { Ancient_scroll_role } from './Ancient_scroll_role'

/* dimensions of background-image */
const w = 900;
const h = 346;

const Styled_ancient_scroll_page = styled.div`
    margin-left: 5px;
    position: absolute;
    background-image: url('${require('./scroll_paper.png')}');
    width: ${w}px;
    height: ${h}px;

    transition: left ${ props => props.timeout}ms linear 0ms;
    
    ${ props => props.transState === 'exiting' && css`
        left: ${w}px;
    ` }
    
    ${ props => props.transState === 'exited' && css`

        display: none;
    ` }
    
    ${ props => props.transState === 'entering' && css`
        visibility: hidden;
        left: ${w}px;
    ` }
    
    ${ props => props.transState === 'entered' && css`
        left: 0px;
    ` }
`;

const Styled_text = styled.div`
    width: 624px;
    padding: 90px 120px 0 30px;
`;

export function Ancient_scroll_page(props) {
    return (
        <Transition
            in={props.in}
            timeout={props.animation_time}
        >
            { (transState) => (
                <Styled_ancient_scroll_page transState={transState} timeout={props.animation_time} >
                    <Styled_text>{ props.children }</Styled_text>
                </Styled_ancient_scroll_page>
            ) }
        </Transition>
    )
}