import React from 'react';

import Loader from '../Loader';

import './SignIn.less';

const SignIn = ({
        emailRef,
        passwordRef,
        submitHandler,
        isLoading
    }) => (
    <div className="SignIn">
        <div className="SignIn__form">
            <input className="SignIn__email" ref={ emailRef } placeholder="email"/>
            <input className="SignIn__password" type="password" ref={ passwordRef } placeholder="password" />
            <input type="submit" className="SignIn__submit-button" />
        </div>
    </div>
);

export default SignIn;