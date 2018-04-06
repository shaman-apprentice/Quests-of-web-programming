import * as React from 'react'
import {Route, Switch} from "react-router-dom"

import {RouteI, routes_config} from '../components/Table_of_contents/routes_config'


import {Styled_route_wrapper} from './Styled_route_wrapper'

export function Routes() {
    return (
        <Styled_route_wrapper>
            <Switch>{ ROUTES }</Switch>
        </Styled_route_wrapper>
    );
}

const ROUTES = routes_config.map( (r: RouteI) =>
    <Route
        key={r.name}
        exact={r.exact !== false}
        path={r.path ? r.path : `/${r.name}`}
        component={require(`./${r.name}`)[r.name]}
    />
);