import React from 'react';
import SignIn from './SignIn';
import { connect } from 'react-redux';

import { signIn } from '../../actions';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.emailRef = this.emailRef.bind(this);
        this.passwordRef = this.passwordRef.bind(this);
    }

    submitHandler() {
        this.props.signIn(this.email.value, this.password.value);
    }

    emailRef(ref) {
        this.email = ref;
    }

    passwordRef(ref) {
        this.password = ref;
    }

    render() {
        return <SignIn
            submitHandler={this.submitHandler}
            emailRef={this.emailRef}
            passwordRef={this.passwordRef}
            isLoading={this.props.isLoading}
        />;
    }
}

const mapStateToProps = ({appState}) => ({ isLoading: !!appState });

const mapDispatchToProps = { signIn };

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);