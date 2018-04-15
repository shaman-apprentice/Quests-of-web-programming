import * as React from 'react'
import {Transition} from 'react-transition-group'
import styled from 'styled-components'

const calc_opacity = (transState) => {
    if (transState === 'entering') {
        return 0;
    }
    if (transState === 'entered') {
        return 1;
    }
    if (transState === 'exiting') {
        return 0;
    }
    if (transState === 'exited') {
        return 0;
    }
}

const Stylings = styled.div`
  position: absolute; /*for keeping position when one has entering and one exiting*/
  transition: opacity 2s ease-in-out;
  opacity: ${props => calc_opacity(props.transitionState)};
`

export const Fade_in_out = (props) =>
    <Transition
        in={props.in}
        timeout={2000}
        mountOnEnter={true}
        unmountOnExit={true}
    >
        {transState =>
            <Stylings transitionState={transState}>
                {props.children}
            </Stylings>
        }
    </Transition>