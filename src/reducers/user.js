import SUCCESS_SIGN_IN from '../actions';

export default (state = {}, { type, user }) => {
  switch (type) {
    case SUCCESS_SIGN_IN:
      return user;
    default:
      return state;
  }
};
