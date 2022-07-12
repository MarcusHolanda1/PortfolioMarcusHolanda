import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

import { HomePage, WelcomePage } from "./pages";

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/portfolio" exact component={HomePage} />
        </Switch>
    </BRouter>
);

export default Routes;
