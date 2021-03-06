import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import _ from 'lodash'

import dancingGhost from 'components/shared_assets/dancingGhost.gif'

export class Mouse_following_ghost extends React.Component {
    state = {
        x: 0,
        y: 0,
    }

    onmousemove = (e) =>
        this._isMounted && this.setState({x: e.pageX, y: e.pageY})

    debounced_onmousemove = _.debounce(this.onmousemove, 60)

    componentDidMount() {
        // when ghost should also follow on scroll, add listener 'scroll'
        // and use e.clientY for tracking mouse move and add window.scrollY
        this.listener = document.addEventListener('mousemove', this.debounced_onmousemove);
        this._isMounted = true;
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.listener)
        this._isMounted = false;
    }

    render() {
        return ReactDOM.createPortal(
            <Styled_cursor
                style={{
                    left: this.state.x,
                    top: this.state.y,
                }}
            />,
            document.getElementById('root')
        );
    }
}

const Styled_cursor = styled.div`
  position: absolute;
  width: 80px;
  height: 100px;
  background-image: url("${dancingGhost}");
  background-size: 70px 110px;
`