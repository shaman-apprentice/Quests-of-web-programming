import React from 'react'
import {withRouter} from 'react-router-dom'

import {Styled_page} from './Styled_page'
import {Magic} from './Magic'
import {Ghostly_blinking} from '../../../components/Ghostly_blinking'

class Last_page extends React.Component {
    state = {
        clicked: false,
    }

    onClick = (event) => {
        event.stopPropagation();
        if (!this.state.clicked) {
            this.setState(
                { clicked: true },
                () => setTimeout(() => this.props.history.push('/Ghosts_of_the_past'), 3000)
            );
        }
    }

    render() {
        return (
            <Styled_page onClick={this.onClick}>
                <Magic/>
                {this.state.clicked && <Ghostly_blinking/>}
            </Styled_page>
        );
    }
}

export default withRouter(Last_page)