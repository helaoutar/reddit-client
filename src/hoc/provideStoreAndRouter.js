import provideStore from './provideStore';
import provideRouter from './provideRouter';

export default store => Component => props => {
    const ComponentWithRouter = provideRouter(Component);
    const ComponentWithStoreAndRouter = provideStore(store)(ComponentWithRouter);
    return <ComponentWithStoreAndRouter {...props} />;
}