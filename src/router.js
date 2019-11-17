import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Movies from "./pages/movies";

const RouterComponent = props => (
    <Router history={props.history}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/movies">
                <Movies />
            </Route>
            <Route exact path="/movies/:id">
                <h1>Movie goes here</h1>
            </Route>
        </Switch>
    </Router>
);

export default RouterComponent;
