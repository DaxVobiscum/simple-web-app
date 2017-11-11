import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { default as HomePage} from "./common/home.component.jsx";
import { default as AboutPage } from "./common/about.component.jsx";

import SignUpPage from "./auth/signup.component.jsx";
import LoginPage from "./auth/login.component.jsx";

const endpoints = [
    {
        text: "Home",
        path: "/",
        component: HomePage
    },
    {
        text: "About",
        path: "/about",
        component: AboutPage
    },
    {
        text: "Sign Up",
        path: "/sign-up",
        component: SignUpPage
    },
    {
        text: "Login",
        path: "/login",
        component: LoginPage,
    }
];

class MainView extends Component {
    
    constructor() {
        
        super();
        
        this.links = endpoints.map((endpoint, index) => 
           <li key={ "link-" + index }>
                <Link to={endpoint.path}>{endpoint.text}</Link>
           </li>
        );
        
        this.routes = endpoints.map((endpoint, index) => 
           <Route key={ "route-" + index } exact path={endpoint.path} component={endpoint.component} /> 
        );
    }
    
    render() {
        
        return (
            <MuiThemeProvider>
                <Router basename="/simple-web-app/">
                    <div>
                        <ul>
                            {this.links}
                        </ul>
                        <Switch>
                            {this.routes}
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

render(
	<MainView />,
	document.getElementById("react")
);
