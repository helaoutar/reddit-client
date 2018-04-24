import { combineReducers } from 'redux';

import appState from './appState';
import user from './user';
import signInErrors from './signInErrors';

export default combineReducers({
  appState,
  user,
  signInErrors,
});
