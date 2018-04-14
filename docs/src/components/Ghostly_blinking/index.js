import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {Styled_blinking, Styled_blinking_props} from './Styled_blinking'

// TODO currently bug in typescript, styled-components and ReactDOM.createPortal combo
export class Ghostly_blinking extends React.Component {
    static defaultProps = {
        animation_iteration_count: 3,
        animation_time: 1.5,
    }

    state = {
        animation_finished: false,
    }

    componentDidMount() {
        const unmount_time = this.props.animation_iteration_count * this.props.animation_time * 1000;
        this.animation_timeout = setTimeout(() => this.setState({animation_finished: true}), unmount_time);
    }

    componentWillUnmount() {
        clearTimeout(this.animation_timeout);
    }

    render() {
        return this.state.animation_finished ?
            null :
            ReactDOM.createPortal(
                <Styled_blinking
                    animation_iteration_count={this.props.animation_iteration_count}
                    animation_time={this.props.animation_time}
                />,
                document.getElementById('root')
            )
    }
}
