import { combineReducers } from 'redux';

import appState from './appState';
import user from './user';
import signInErros from './signInErros';

export default combineReducers({
    appState,
    user,
    signInErros
});