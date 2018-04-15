import * as React from 'react'

import {Styled_layout} from './Styled_Layout'
import {Tree_svg} from './Tree_svg'
import {Out_of_wisdom} from './Out_of_wisdom'
import {Styled_peace_of_wisdom_container} from './Styled_peace_of_wisdom_container'
import * as peaces_of_wisdom from './peaces_of_wisdom'

let new_peaces_of_wisdom = Object.keys(peaces_of_wisdom);

export class Tree_of_almost_wisdom extends React.Component {
    state = {
        wisdom_key: null,
    }

    get_next_wisdom_key = () => {
        if (new_peaces_of_wisdom.length === 0) {
            return undefined;
        }

        const random_index = Math.floor(Math.random() * new_peaces_of_wisdom.length);
        const wisdom_key = new_peaces_of_wisdom.splice(random_index, 1)[0];
        return wisdom_key;
    }

    on_tree_clicked = () =>
        this.setState({wisdom_key: this.get_next_wisdom_key()})

    render_peace_of_wisdom = () => {
        if (this.state.wisdom_key === null) {
            return null;
        }

        if(this.state.wisdom_key === undefined) {
            return <Out_of_wisdom />
        }

        const Peace_of_wisdom = peaces_of_wisdom[this.state.wisdom_key];
        return <Peace_of_wisdom />
    }


    render() {
        return (
            <Styled_layout>
                <Tree_svg onClick={this.on_tree_clicked} />
                <Styled_peace_of_wisdom_container>
                    {this.render_peace_of_wisdom()}
                </Styled_peace_of_wisdom_container>
            </Styled_layout>
        )
    }
}