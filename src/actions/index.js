export const SIGN_IN = 'SIGN_IN';

export const SUCCESS_SIGN_IN = 'SUCCESS_SIGN_IN';

export const FAILED_SIGN_IN = 'FAILED_SIGN_IN';


export const startSignIn = () => ({ type: SIGN_IN });

export const successSignIn = user => ({
    type: SUCCESS_SIGN_IN,
    user
});

export const failedSignIn = erros => ({
    type: FAILED_SIGN_IN,
    erros
});