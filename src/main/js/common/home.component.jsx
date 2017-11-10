import React, { Component } from "react";

class Hello extends Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return <div>Welcome back, {this.props.name}!</div>
    }
}

class AppPath extends Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return <div>App Path: {this.props.appPath}</div>
    }
}

class InfoForm extends Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return (
            <form action="SaveInfo" method="GET">
                <input type="text" placeholder="Your name here" name="userName" />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default class Home extends React.Component {
  
    constructor(props) {
        
        super(props);
        
        this.name = Window.REQUEST.name;
        this.appPath = Window.REQUEST.appPath;
    }
    
    render() {
        
        return (
            <div>
                <div>Home Page</div>
                <br />
                <AppPath appPath={this.appPath} />
                <br />
                {
                    this.name !== "" ? 
                        <Hello name={this.name} /> :
                        <InfoForm />
                }
            </div>
        )
    }
}