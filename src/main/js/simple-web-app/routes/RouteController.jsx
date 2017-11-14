import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {HomePage} from './HomePage';
import {AboutPage} from './AboutPage';
import {SignUpPage} from './SignUpPage';
import {LoginPage} from './LoginPage';

var shortid = require('shortid');
var _ = require('underscore');

const endpoints = [
    {
        text: 'Home',
        path: '/',
        component: HomePage,
        props: {
            'exact': true
        },
        requires: [
           'TestComponent'
        ]
    },
    {
        text: 'About',
        path: '/about',
        component: AboutPage
    },
    {
        text: 'Sign Up',
        path: '/sign-up',
        component: SignUpPage,
        requires: [
           'SignUpForm'
        ]
    },
    {
        text: 'Login',
        path: '/login',
        component: LoginPage,
        requires: [
           'LoginForm'
        ]
    }
];

const links = endpoints.map((endpoint, index) => 
    <li key={shortid.generate()}>
         <Link to={endpoint.path}>{endpoint.text}</Link>
    </li>
);

class RouteController extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    generateRoutes() {
        
        var routes = [ ];
        
        var ctrl = this;
        
        _.each(endpoints, endpoint => {
            
            var routeKey = shortid.generate();
            
            if (endpoint.requires && 0 < endpoint.requires.length) {
                
                var availableComponents = ctrl.props.components;
                
                var Component = endpoint.component;
                
                var filteredComponents = _.pick(availableComponents, ...endpoint.requires);
                
                var routeComponent = (0 < _.keys(filteredComponents).length) ? 
                    <Component requires={filteredComponents} /> : <Component />;
                
                var renderFunc = (routeComponent => routeProps => routeComponent)(routeComponent);
                
                routes.push(<Route key={routeKey} {...endpoint.props} path={endpoint.path} render={renderFunc} />);
            }
            else {
                
                routes.push(<Route key={routeKey} {...endpoint.props} path={endpoint.path} component={endpoint.component} />);
            }
        });
        
        return routes;
    }
    
    render() {
        return (
            <MuiThemeProvider>
                <Router basename="/simple-web-app/">
                    <div>
                        <ul>
                            {links}
                        </ul>
                        <Switch>
                            {this.generateRoutes()}
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default RouteController;