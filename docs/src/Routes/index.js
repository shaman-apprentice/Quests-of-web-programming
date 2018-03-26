import * as React from 'react'
import { Route, Switch } from "react-router-dom"

import { routes_config } from '../components/Table_of_contents/routes_config'

export function Routes() {
    return <Switch>{ ROUTES }</Switch>;
}

const ROUTES = routes_config.map( r =>
    <Route
        key={r.name}
        exact={r.exact !== false}
        path={r.path ? r.path : `/${r.name}`}
        component={require(`./${r.name}`)[r.name]}
    />
);