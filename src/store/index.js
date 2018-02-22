import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
);