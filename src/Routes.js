import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/portfolio" exact component={ Portfolio } />
        </Switch>
    </BRouter>
);

export default Routes;