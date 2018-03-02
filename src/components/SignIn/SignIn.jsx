import React from 'react';
import './SignIn.less';

const SignIn = ({emailRef, passwordRef, submitHandler}) => (
    <div className="main">
        <div className="social-icons">
            <div className="col_1_of_f span_1_of_f">
                <a href="#">
                    <ul className='facebook'>
                        <i className="fb"> </i>
                        <li>Connect with Facebook</li>
                        <div className='clear'> </div>
                    </ul>
                </a>
            </div>	
            <div className="col_1_of_f span_1_of_f">
                <a href="#">
                    <ul className='twitter'>
                        <i className="tw"> </i>
                        <li>Connect with Twitter</li>
                        <div className='clear'> </div>
                    </ul>
                </a>
            </div>
            <div className="clear"> </div>	
        </div>
        <h2>Or SignIn with your email/password</h2>
        <form>
            <div className="lable-2">
                <input type="text" className="text" ref={emailRef} />
                <input type="password" className="text" ref={passwordRef}/>
            </div>
            <div className="submit">
                <input type="submit" onClick={submitHandler} value="Sign In" />
            </div>
            <div className="clear"> </div>
        </form>
    </div>
);

export default SignIn;