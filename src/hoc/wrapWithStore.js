import createStore from '../store';
import provideStore from './provideStore';

export default (Component, initialState = {}) => {
  const store = createStore(initialState);
  return provideStore(store)(Component);
}