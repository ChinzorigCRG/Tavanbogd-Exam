import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history'
import Add from './pages/create';
import Update from "./pages/update";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/create" component={Add} />
                    <Route path="/update/:id" component={Update} />
                </Switch>
            </Router>
        )
    }
}
