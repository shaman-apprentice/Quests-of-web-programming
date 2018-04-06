import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Styled_svg } from './Styled_svg'
import { routes_config } from './routes_config'

const table_of_contents_svg = require('./table_of_contents.svg') as string;

interface Props extends RouteComponentProps<any> {
    /** whether table of contents is shown or not */
    is_open: boolean;
    /** history used by react-router */
    history: any;
    onClick: any;
}

class Table_of_contents extends React.Component<Props> {

    componentDidMount() {
        for (let route of routes_config) {
            const node = document.getElementById(route.name);
            if (node) {
                node.addEventListener("click", () => this.props.history.push(route.name) );
            }
            else {
                console.warn('For the following route no svg-img could be found:');
                console.warn(route);
            }
        }
    }

    render() {
        return (
            <Styled_svg
                is_open={this.props.is_open}
                onClick={this.props.onClick}
                dangerouslySetInnerHTML={{ __html: table_of_contents_svg }}
            />
        );
    }
}
export default withRouter(Table_of_contents);