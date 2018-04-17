import React from 'react';
import classnames from 'classnames';

import Loader from '../Loader';

import './SignIn.less';
import logo from './reddit.png';


const SignIn = ({
        emailRef,
        passwordRef,
        submitHandler,
        isLoading,
        logoSrc,
        emailErrorMessage,
        passwordErrorMessage
    }) => (
    <div className="SignIn">
        <div className="SignIn__logo-container">
            <img src={logo} className="SignIn__logo"/>
        </div>
        <div className="SignIn__form">
            <input
                className={classnames('SignIn__email', {
                    'SignIn__email--error': !!emailErrorMessage,
                })}
                type="email"
                ref={emailRef}
                placeholder="email"/>
            {
                !!emailErrorMessage ? 
                <p className="SignIn__email-error-message">
                    {emailErrorMessage}
                </p> :
                null
            }

            <input
               className={classnames('SignIn__password', {
                'SignIn__password--error': !!passwordErrorMessage,
               })}
               type="password"
               ref={passwordRef}
               placeholder="password" />
            {
                !!passwordErrorMessage ? 
                <p className="SignIn__submit-button-error-message">
                    {passwordErrorMessage}
                </p> :
                null
            }

            <input type="submit" className="SignIn__submit-button" onClick={submitHandler}/>
        </div>
    </div>
);

export default SignIn;