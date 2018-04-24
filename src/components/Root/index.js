import React from 'react';

import provideStoreAndRouter from '../../hoc/provideStoreAndRouter';
import createStore from '../../store';
import '../../firebase';
import App from '../App';


const store = createStore();

const Root = props => {
  const AppWithStoreAndRouter = provideStoreAndRouter(store)(App);
  return <AppWithStoreAndRouter {...props} />;
}

export default Root;