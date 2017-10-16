import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import { ItemGrid } from '../containers/ItemGrid/'
import { ProfileContainer } from '../containers/Profile'
import Login from '../containers/Login/'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ItemGrid} />
                <Route path="/profile/:id" component={ProfileContainer}/>
                <Route path="/login" component={Login} />
                <Route path="/pagenotfound" />
            </Switch>
        );
    }
}

export default Routes