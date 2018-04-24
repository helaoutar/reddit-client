import React from 'react';
import provideStore from './provideStore';
import provideRouter from './provideRouter';

const provideStoreAndRouter = store => Component => props => {
  const ComponentWithRouter = provideRouter(Component);
  const ComponentWithStoreAndRouter = provideStore(store)(ComponentWithRouter);
  return <ComponentWithStoreAndRouter {...props} />;
};

export default provideStoreAndRouter;
