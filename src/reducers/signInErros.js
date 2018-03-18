import { FAILED_SIGN_IN } from '../actions';

export default (state = [], {type, errors}) => {
    switch (type) {
    case FAILED_SIGN_IN:
        return errors;
    default:
        return state;
    }
};