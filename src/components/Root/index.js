import React from 'react';

import provideStoreAndRouter from '../../hoc/provideStoreAndRouter';
import store from '../../store';
import App from '../App';

const Root = props => {
    const AppWithStoreAndRouter = provideStoreAndRouter(store())(App);
    return <AppWithStoreAndRouter {...props} />;
}

export default Root;