import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => {
  
    return (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-heading">Sign Up</h2>
                
                {errors.summary && <p className="error-message">{errors.summary}</p>}
                
                <div className="field-line">
                    <TextField
                        floatingLabelText="Name"
                        name="name"
                        errorText={errors.name}
                        onChange={onChange}
                        value={user.name} 
                    />
                </div>
                
                <div className="field-line">
                    <TextField
                        floatingLabelText="E-mail"
                        name="email"
                        errorText={errors.email}
                        onChange={onChange}
                        value={user.email}
                    />
                </div>
                
                <div className="field-line">
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                        name="password"
                        errorText={errors.password}
                        onChange={onChange}
                        value={user.password}
                    />
                </div>
                
                <div className="field-line">
                    <RaisedButton type="submit" label="Create New Account" primary />
                </div>
                
                <CardText>Already have an account? <Link to={"/login"}>Log in</Link></CardText>
            </form>
        </Card>
    );
};

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

class SignUpPage extends Component {
    
    constructor(props) {
        
        super(props);

        this.errors = {
            name: "Invalid user name.",
            email: "Invalid e-mail.",
            password: "Invalid password."
        };
        
        this.user = {
            name: "",
            email: "",
            password: ""
        };
    }
    
    onSubmit(e) {
        
        console.log("Submitted sign up form.");
    }
    
    onChange (e) {
        
        console.log("Sign up form changed.");
    }
    
    render() {
      
      return (
          <SignUpForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              errors={this.errors}
              user={this.user}
          />
      );
    }
}

export default SignUpPage;