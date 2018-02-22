import { BrowserRouter as Router } from 'react-router-dom';

export default Component => props => (
    <Router>
        <Route component={() => <Component {...props} />} />
    </Router>
);