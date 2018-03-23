import * as React from 'react'

import table_of_contents from './table_of_contents.svg';

export class Header extends React.Component {
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
                <h2>Quests of Web Programming</h2>
                { this.state.is_table_of_contents_shown ?
                    <div dangerouslySetInnerHTML={{ __html: table_of_contents }} /> :
                    null
                }
            </div>
        );
    }
}