import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const provideRouter = Component => props => (
    <BrowserRouter>
        <Route component={({location}) => <Component {...props} location={location} /> } />
    </BrowserRouter>
);

export default provideRouter;

/**
 * ????
 * 1) get user data (redux)
 * 2) redirections based on the user data + location
 */