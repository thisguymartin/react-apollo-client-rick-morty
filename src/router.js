import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";

const RouterComponent = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/movies">
                <Movies />
            </Route>
            <Route path="/movies/:id">
                <h1>Movie goes here</h1>
            </Route>
        </Switch>
    </Router>
);

export default RouterComponent;
