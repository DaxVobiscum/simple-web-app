import React from 'react';

class SignUpPage extends React.Component {
  
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        if (this.props.requires) {
            
            var SignUpForm = this.props.requires['SignUpForm'];
            
            if (SignUpForm) {
                
                return (
                    <SignUpForm
                        onSubmit={(e) => console.log('Sign up form submitted.')}
                        onChange={(e) => console.log('Sign up form changed.')}
                        errors={{email: 'Invalid e-mail.'}}
                        user={{name:'Frank', email:'frank@frankcodes.com'}}
                    />
                );
            }
        }
    
        return <div>Error: Unable to load sign up form component.</div>;
    }
}

export default SignUpPage;