import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

let logger = createLogger();

export default (state) => (
    createStore(
        reducers,
        state,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
);