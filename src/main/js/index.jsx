import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./common/home.component.jsx";
import About from "./common/about.component.jsx";

const endpoints = [
    {
        text: "Home",
        path: "",
        component: Home
    },
    {
        text: "About",
        path: "About",
        component: About
    }
];

class MainView extends Component {
    
    constructor() {
        
        super();
        
        this.links = endpoints.map((endpoint, index) => 
           <Link key={ "link-" + index } to={endpoint.path}>{endpoint.text}</Link> 
        );
        
        this.routes = endpoints.map((endpoint, index) => 
           <Route key={ "route-" + index } path={endpoint.path} component={endpoint.component} /> 
        );
    }
    
    render() {
        
        return (
            <div>
                <Router>
                    <div>
                        {this.links}
                        <Switch>
                            {this.routes}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

render(
	<MainView />,
	document.getElementById("react")
);
