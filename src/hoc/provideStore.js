import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';

let store = configureStore();

let provideStore = Component => (
    <Provider store={store}>
        <Component />
    </Provider>
);

export default provideStore;