import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from 'firebase';

import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SignOut from '../SignOut';

class App extends Component {
    constructor(props) {
        super(props);
        this.user = auth().currentUser;
        this.isLoggedIn = !!this.user;
    }

    render() {
        return (
            <Switch>
                <Route path="/signIn" render={() => this.isLoggedIn ? <Redirect to="/" /> : <SignIn /> } />
                <Route path="/signUp" render={() => this.isLoggedIn ? <Redirect to="/" /> : <SignUp /> } />
                <Route path="/logout" render={() => <Redirect to="/signIn" /> } />
                <Route path="/" render={() => this.isLoggedIn ? <Home /> : <Redirect to="/signIn" /> } />
            </Switch>
        );
    }
}

export default App;