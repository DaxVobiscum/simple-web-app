import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import {HomePage, AboutPage, SignUpPage, LoginPage} from './common/index.jsx';

import shortid from 'shortid';

const endpoints = [
    {
        text: 'Home',
        path: '/',
        component: HomePage
    },
    {
        text: 'About',
        path: '/about',
        component: AboutPage
    },
    {
        text: 'Sign Up',
        path: '/sign-up',
        component: SignUpPage
    },
    {
        text: 'Login',
        path: '/login',
        component: LoginPage,
    }
];

const links = endpoints.map((endpoint, index) => 
    <li key={shortid.generate()}>
         <Link to={endpoint.path}>{endpoint.text}</Link>
    </li>
);

const routes = endpoints.map((endpoint, index) => 
    <Route key={shortid.generate()} path={endpoint.path} component={endpoint.component} /> 
);


class RouteController extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        <Router basename="/simple-web-app/">
            <div>
                <ul>
                    {links}
                </ul>
                <ErrorBoundary>
                    <Switch>
                        {routes}
                    </Switch>
                </ErrorBoundary>
            </div>
        </Router>
    }
}