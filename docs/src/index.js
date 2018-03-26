import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from './components/Header'
import { Routes } from './Routes'

function _is_hosted_on_GitHubPages(origin) {
    return origin.includes('shaman-apprentice.github.io');
}
const basename = _is_hosted_on_GitHubPages(window.location.origin) ?
    '/Quests-of-web-programming' : // project name
    '/'; // served from local_dev_server

function App() {
    return (
        <Router basename={basename}>
            <div>
                <Header />
                <Routes />
            </div>
        </Router>
    );
}

render(<App />, document.getElementById('root')); // body style (margin/padding=0) is set in index.html