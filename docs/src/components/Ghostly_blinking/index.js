import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Styled_blinking, Styled_blinking_props} from './Styled_blinking'

// TODO React.SFC<Styled_blinking_props> fu :D
export const Ghostly_blinking = (props) => ReactDOM.createPortal(
    <Styled_blinking animation_iteration_count={props.animation_iteration_count}/>,
    document.getElementById('root')
)
