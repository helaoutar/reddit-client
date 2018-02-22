import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SignOut from '../SignOut';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/logout" component={SignOut} />
            </div>
        );
    }
}

export default App;