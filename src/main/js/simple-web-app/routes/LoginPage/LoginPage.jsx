import React from 'react';
import LoginForm from './../auth/LoginForm.jsx';

export default function LoginPage () {
  
    return (
        <LoginForm
            onSubmit={(e) => console.log('Login form submitted.')}
        />
    );
};