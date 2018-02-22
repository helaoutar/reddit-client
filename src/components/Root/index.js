import provideStoreAndRouter from '../../hoc/provideStoreAndRouter';
import store from '../../store';
import App from '../App';


export default props => {
    const AppWithStoreAndRouter = provideStoreAndRouter(store)(App);
    return <AppWithStoreAndRouter {...props} />;
}