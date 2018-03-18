import { SIGN_IN } from '../actions';

export default (state = '', { type }) => {
    switch (type) {
    case SIGN_IN:
        return 'signIn';
    default:
        return state;
    }
};