import * as React from 'react'

import Table_of_contents from '../Table_of_contents'
import { Styled_Header } from './Styled_Header'
import { Heading } from './Heading'
import About_link from './About_link'

export class Header extends React.Component<{}, {is_table_of_contents_shown: boolean}> {
    state = {
        is_table_of_contents_shown: false,
    };

    toggle_table_of_contents = () =>
        this.setState({
            is_table_of_contents_shown: !this.state.is_table_of_contents_shown
        });

    close_table_of_contents = () =>
        this.setState({
            is_table_of_contents_shown: false
        });

    render() {
        return (
            <div>
                <Styled_Header>
                    <About_link
                        close_table_of_contents={this.close_table_of_contents}
                    />
                    <Heading
                        is_table_of_contents_shown={this.state.is_table_of_contents_shown}
                        onClick={this.toggle_table_of_contents}
                    />
                </Styled_Header>
                <Table_of_contents
                    is_open={this.state.is_table_of_contents_shown}
                    onClick={this.toggle_table_of_contents}
                />
            </div>
        );
    }
}