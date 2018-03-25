import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import { Header } from './components/Header'
import { Routes } from './Routes'

// body style (margin/padding=0) is set in index.html
function App() {
    return (
        <Router basename={'/Quests-of-web-programming/docs'}>
            <div>
                <Header />
                <Routes />
            </div>
        </Router>
    );
}

render(<App />, document.getElementById('root'));