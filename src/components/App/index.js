import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SignOut from '../SignOut';

class App extends Component {
    constructor(props) {
        super(props);
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
    }

    render() {
        return (
            <div>
                <Route exact path="/" render={() => this.isLoggedIn ? <Home /> : (<Redirect to="/signIn" />) } />
                <Route path="/signIn" render={() => this.isLoggedIn ? <Redirect to="/" /> : <SignIn /> } />
                <Route path="/signUp" render={() => this.isLoggedIn ? <Redirect to="/" /> : <SignUp /> } />
                <Route path="/logout" render={() => <Redirect to="/signIn" /> } />
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({ user });
export default App;