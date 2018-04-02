import * as React from 'react'

import { Styled_Heading } from './Styled_Heading'
import Table_of_contents from '../Table_of_contents'

export class Header extends React.Component<{}, {is_table_of_contents_shown: boolean}> {
    state = {
        is_table_of_contents_shown: false,
    };

    toggle_table_of_contents = () =>
        this.setState({
            is_table_of_contents_shown: !this.state.is_table_of_contents_shown
        });

    render() {
        return (
            <div onClick={this.toggle_table_of_contents}>
                <Styled_Heading
                    title={ this.state.is_table_of_contents_shown ?
                        undefined :
                        'click to open table of contents'
                    }
                >
                    Quests of Web Programming
                </Styled_Heading>
                <Table_of_contents is_open={this.state.is_table_of_contents_shown} />
            </div>
        );
    }
}