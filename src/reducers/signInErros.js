import { FAILED_SIGN_IN, SUCCESS_SIGN_IN } from '../actions';

export default (state = [], { type, errors }) => {
    switch (type) {
    case FAILED_SIGN_IN:
        return errors;
    case SUCCESS_SIGN_IN:
        return "";
    default:
        return state;
    }
};