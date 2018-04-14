import React from 'react'
import { withTheme } from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { StyledLeftPage } from './StyledComponents/StyledLeftPage'
import { StyledRightPage } from './StyledComponents/StyledRightPage'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { exited: false }
    }

    fakeUnmount = () => {
        this.fakeUnmountTimer = setTimeout(
            () => this.setState({ exited: true }),
            this.props.theme.pageTurnDuration / 2
        );
    };

    fakeMount = () => {
        clearTimeout(this.fakeUnmountTimer);
        this.setState({ exited: false });
    };


    render() {
        return (
            <Transition
                in={this.props.in}
                timeout={this.props.theme.pageTurnDuration / 2}
                onExited={this.fakeUnmount}
                onEnter={this.fakeMount}
            >
                { (transState) => {
                    const P = this.props.isLeft ? StyledLeftPage : StyledRightPage;
                    return (
                        <P
                            transState={transState}
                            isOpen={!this.state.exited}
                            turnDir={this.props.turnDir}
                            onClick={this.props.onClick}
                        >
                            { this.props.children }
                        </P>
                    );
                } }
            </Transition>
        );
    }
}

export default withTheme(Page);