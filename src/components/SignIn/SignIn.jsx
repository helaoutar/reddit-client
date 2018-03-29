import React from 'react';

import Loader from '../Loader';

import './SignIn.less';
import logo from './reddit.png';

const SignIn = ({
        emailRef,
        passwordRef,
        submitHandler,
        isLoading,
        logoSrc
    }) => (
    <div className="SignIn">
        <div className="SignIn__logo-container">
            <img src={logo} className="SignIn__logo"/>
        </div>
        <div className="SignIn__form">
            <input className="SignIn__email" type="email" ref={emailRef} placeholder="email"/>
            <input className="SignIn__password" type="password" ref={passwordRef} placeholder="password" />
            <input type="submit" className="SignIn__submit-button" onClick={submitHandler}/>
        </div>
    </div>
);

export default SignIn;