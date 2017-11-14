import React from 'react';

class LoginPage extends React.Component {
  
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        if (this.props.requires) {
            
            var LoginForm = this.props.requires['LoginForm'];
            
            if (LoginForm) {
                
                return (
                    <LoginForm
                        onSubmit={(e) => console.log('Login form submitted.')}
                    />
                ); 
            }
        }
        
        return <div>Error: Failed to load login form component.</div>;
    }
}

export default LoginPage;