import { auth } from 'firebase';

export const SIGN_IN = 'SIGN_IN';

export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';

export const FAILED_SIGN_IN = 'FAILED_SIGN_IN';


export const startSignIn = () => ({ type: SIGN_IN });

export const successSignIn = user => ({
    type: SUCCESS_SIGN_IN,
    user
});

export const failedSignIn = errors => ({
    type: FAILED_SIGN_IN,
    errors
});

export const signIn = (email, password) => dispatch => {
    dispatch(startSignIn());
    auth().signInWithEmailAndPassword(email, password).
        then(data => {
            dispatch(successSignIn(data));
        }).
        catch(errors => {
            dispatch(failedSignIn(errors));
        });
}