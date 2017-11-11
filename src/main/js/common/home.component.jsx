import React, { Component } from "react";
import { Card, CardTitle } from "material-ui/Card";
import PropTypes from "prop-types";

class Home extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.name = Window.REQUEST.name || "";
        this.appPath = Window.REQUEST.appPath || "";
    }
    
    render() {
        
        return (
            <Card className="container">
                <CardTitle title="simple-web-app" subtitle="This is the home page." />
                {
                    (0 < this.name.length) ?  
                        <div>
                            <br />
                            <div>Welcome back, {this.name}!</div>
                        </div>
                        : <div>You are not signed in.</div> 
                }
                {
                    (0 < this.appPath.length) ? 
                        <div>
                            <br />
                            <div>App Path: {this.appPath}</div>
                        </div>
                        : <div>App path not available.</div>
                }
            </Card>
        );
    }
};

export default Home;