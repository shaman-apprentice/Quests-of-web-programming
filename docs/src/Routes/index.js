import * as React from 'react'
import { Route, Switch } from "react-router-dom";

export function Routes() {
    return <Switch>{ ROUTES }</Switch>;
}

const NAME_OF_ROUTES = [
    'Every_story_needs_a_beginning',
];

const ROUTES = NAME_OF_ROUTES.map( name =>
    <Route
        key={name}
        exact
        path={`/${name}`}
        component={require(`./${name}`)[name]}
    />
);
ROUTES.push(<Route key="About_me" exact path="/(index)?(index.html)?" component={require(`./About_me`)['About_me']} />);
ROUTES.push(<Route key="Not_found" component={require(`./Not_found`)['Not_found']} />);