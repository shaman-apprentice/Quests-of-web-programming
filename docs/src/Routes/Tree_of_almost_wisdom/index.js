import * as React from 'react'
import {TransitionGroup} from 'react-transition-group'
import _ from 'lodash';

import {Styled_layout} from './Styled_Layout'
import {Tree_svg} from './Tree_svg'
import {Out_of_wisdom} from './Out_of_wisdom'
import {Styled_peace_of_wisdom_TransGroup} from './Styled_peace_of_wisdom_TransGroup'
import * as peaces_of_wisdom from './peaces_of_wisdom'
import {Fade_in_out, Styled_Fade_in_out_TransGroup} from './peaces_of_wisdom/Fade_in_out'

let new_peaces_of_wisdom = Object.keys(peaces_of_wisdom);

export class Tree_of_almost_wisdom extends React.Component {
    state = {
        wisdom_key: 'NO_WISDOM_SO_FAR',
    }
    out_of_wisdom_counter = 0;

    get_next_wisdom_key = () => {
        if (new_peaces_of_wisdom.length === 0) {
            return 'NO_MORE_WISDOM';
        }

        const random_index = Math.floor(Math.random() * new_peaces_of_wisdom.length);
        const wisdom_key = new_peaces_of_wisdom.splice(random_index, 1)[0];
        return wisdom_key;
    }

    on_tree_clicked = () =>
        this.setState({wisdom_key: this.get_next_wisdom_key()})

    debounced_on_tree_clicked =
        _.debounce(this.on_tree_clicked, 2000, {
            'leading': true,
            'trailing': false
        })

    render_peace_of_wisdom = () => {
        if (this.state.wisdom_key === 'NO_WISDOM_SO_FAR') {
            return [
                <Fade_in_out key={'out_of_wisdom_'+this.out_of_wisdom_counter}>
                    <div><p>&#128034;</p><p>&#x1f422;</p>U+1F422 </div>
                </Fade_in_out>
            ];
        }

        if(this.state.wisdom_key === 'NO_MORE_WISDOM') {
            this.out_of_wisdom_counter += 1;
            return [
                <Fade_in_out key={'out_of_wisdom_'+this.out_of_wisdom_counter}>
                    <Out_of_wisdom />
                </Fade_in_out>
            ]
        }

        const Peace_of_wisdom = peaces_of_wisdom[this.state.wisdom_key];
        return [
            <Fade_in_out key={this.state.wisdom_key}>
                <Peace_of_wisdom />
            </Fade_in_out>
        ]
    }


    render() {
        return (
            <Styled_layout>
                <Tree_svg onClick={this.debounced_on_tree_clicked} />
                <Styled_Fade_in_out_TransGroup>
                    {this.render_peace_of_wisdom()}
                </Styled_Fade_in_out_TransGroup>
            </Styled_layout>
        )
    }
}