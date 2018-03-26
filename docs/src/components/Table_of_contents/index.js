import * as React from 'react'
import { withRouter } from 'react-router-dom'

import { Styled_Opening_Mechanism } from './Styled_Opening_Mechanism'
import table_of_contents_svg from './table_of_contents.svg'
import { routes_config } from './routes_config'

// todo prop-types / typescript
class Table_of_contents_without_router extends React.Component {

    componentDidMount() {
        for (let route of routes_config) {
            const node = document.getElementById(route.name);
            node && node
                .addEventListener("click", () =>
                    this.props.history.push(route.name)
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
export const Table_of_contents = withRouter(Table_of_contents_without_router);