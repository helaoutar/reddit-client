import { SIGN_IN } from '../actions';

export const appState = (state = '', { type }) => {
    switch (type) {
    case SIGN_IN:
        return 'signIn';
    default:
        return state;
    }
};