import * as React from 'react'
import { withRouter } from 'react-router-dom'

import { Styled_Opening_Mechanism } from './Styled_Opening_Mechanism'
import table_of_contents_svg from './table_of_contents.svg'

export const CHAPTERS = [
    'Every_story_needs_a_beginning',
];


// TODO props / typescript
// TODO not withRouter
class Table_of_contentsWithoutRouter extends React.Component {

    componentDidMount() {
        for (let chapter of CHAPTERS) {
            document.getElementById(chapter)
                .addEventListener("click", () =>
                    this.props.history.push(chapter)
                );
        }
    }

    render() {
        return (
            <Styled_Opening_Mechanism
                isOpen={this.props.isOpen}
                dangerouslySetInnerHTML={{ __html: table_of_contents_svg }}
            />
        );
    }
}
export const Table_of_contents = withRouter(Table_of_contentsWithoutRouter);