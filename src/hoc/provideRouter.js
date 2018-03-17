import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const provideRouter = Component => props => (
    <BrowserRouter>
        <Component {...props} />
    </BrowserRouter>
);

export default provideRouter;

/**
 * ????
 * 1) get user data (redux)
 * 2) redirections based on the user data + location
 */