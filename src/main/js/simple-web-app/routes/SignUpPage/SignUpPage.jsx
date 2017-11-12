import React from 'react';
import SignUpForm from './../auth/SignUpForm.jsx';

export default function SignUpPage () {
  
    return (
        <SignUpForm
            onSubmit={(e) => console.log('Sign up form submitted.')}
            onChange={(e) => console.log('Sign up form changed.')}
            errors={{email: 'Invalid e-mail.'}}
            user={{name:'Frank', email:'frank@frankcodes.com'}}
        />
    );
};