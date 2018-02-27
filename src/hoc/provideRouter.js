import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const provideRouter = Component => props => (
    <BrowserRouter>
        <Route component={({location}) => <Component {...props} location={location} /> } />
    </BrowserRouter>
);

export default provideRouter;