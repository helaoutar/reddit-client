import React from 'react';
import SignIn from './SignIn';

class SignInContainer extends React.Component {
    render() {
        return <SignIn submitHandler={() => true}/>;
    }
}

export default SignInContainer;