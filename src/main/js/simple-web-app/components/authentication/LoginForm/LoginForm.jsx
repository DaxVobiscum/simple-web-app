import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

function LoginForm ({
    onSubmit
}) {
  
    return (
        <Card className="container">
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-header">Login</h2>
                <p>Work in Progress</p>
                <CardText>Click <Link to={'/'}>here</Link> to return to the home page.</CardText>
            </form>
        </Card>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;