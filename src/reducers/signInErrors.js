import { FAILED_SIGN_IN, SUCCESS_SIGN_IN } from '../actions';

import { INVALID_EMAIL, WRONG_PASSWORD, USER_NOT_FOUND } from '../constants';

const formatErrors = errors => {
  const errorMessages = {};

  switch (errors.code) {
    case INVALID_EMAIL:
      Object.assign(errorMessages, {
        emailErrorMessage: 'Please check your email.',
      });
      break;

    case USER_NOT_FOUND:
      Object.assign(errorMessages, {
        emailErrorMessage: 'Email not found.',
      });
      break;

    case WRONG_PASSWORD:
      Object.assign(errorMessages, {
        passwordErrorMessage: 'Wrong Password.',
      });
      break;

    default:
      Object.assign(errorMessages, {
        genericMessage: 'Something wrong, please try again.',
      });
  }

  return errorMessages;
};

export default (state = {}, { type, errors }) => {
  switch (type) {
    case FAILED_SIGN_IN:
      return formatErrors(errors);
    case SUCCESS_SIGN_IN:
      return '';
    default:
      return state;
  }
};
