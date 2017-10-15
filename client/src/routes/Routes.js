import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import { ItemGrid } from '../containers/ItemGrid/'
import Login from '../containers/Login/'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ItemGrid} />
                {/* <Route path="/:user" component={User}/> */}
                <Route path="/login" component={Login} />
                <Route path="/pagenotfound" />
            </Switch>
        );
    }
}

export default Routes