import React from 'react'
import styled from 'styled-components'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { Ancient_scroll_page } from './Ancient_scroll_page'
import { Ancient_scroll_role } from './Ancient_scroll_role'
import _ from 'lodash'

const Styled_container = styled.div`
    position: relative;
    height: 346px;
    width: 900px;
    margin: auto;
    overflow: hidden;
`;

class Ancient_scroll extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeScroll: 0 };

        this.turn = _.throttle(this.turn.bind(this), this.props.animation_time, { trailing: false });
    }

    turn() {
        this.setState(s => ({activeScroll: s.activeScroll + 1}));
    }

    render() {
        return (
            <Styled_container onClick={this.turn}>
                <TransitionGroup>
                    {[
                        <Ancient_scroll_page k={this.state.activeScroll} key={`page_${this.state.activeScroll}`} animation_time={this.props.animation_time} turn={this.turn}>
                            { React.Children.toArray(this.props.children)[this.state.activeScroll] }
                        </Ancient_scroll_page>
                    ]}

                </TransitionGroup>
                <Ancient_scroll_role rotations={this.state.activeScroll} animation_time={2*this.props.animation_time} />
            </Styled_container>
        );
    }
}

export { Ancient_scroll }

