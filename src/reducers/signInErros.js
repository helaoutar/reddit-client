import { FAILED_SIGN_IN } from '../actions';

export const signInErrors = (state = [], {type, errors}) => {
    switch (type) {
    case FAILED_SIGN_IN:
        return errors;
    default:
        return state;
    }
};
