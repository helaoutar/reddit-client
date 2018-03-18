import { SIGN_IN, FAILED_SIGN_IN } from '../actions';

export default (state = '', { type }) => {
    switch (type) {
    case SIGN_IN:
        return 'signIn';
    case FAILED_SIGN_IN:
        return '';
    default:
        return state;
    }
};