import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const provideRouter = Component => props => (
    <BrowserRouter>
        <Component {...props} />
    </BrowserRouter>
);

export default provideRouter;