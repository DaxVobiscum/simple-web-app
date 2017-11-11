import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText } from "material-ui/Card";

const LoginForm = ({
    onSubmit
}) => {
  
    return (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-header">Login</h2>
                <p>Work in Progress</p>
                <CardText>Click <Link to={"/"}>here</Link> to return to the home page.</CardText>
            </form>
        </Card>
    );
}

class LoginPage extends Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return (
            <LoginForm
                onSubmit={(e) => console.log("Login form submitted.")}
            />
        );
    }
}

export default LoginPage;