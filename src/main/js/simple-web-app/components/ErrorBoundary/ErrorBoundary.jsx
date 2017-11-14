import React from 'react';

class ErrorBoundary extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            error: null,
            errorInfo: null
        };
    }
    
    componentDidCatch(error, errorInfo) {
        this.setState({
           error: error,
           errorInfo: errorInfo
        });
    }
    
    render() {
        if (this.state.errorInfo) {
            
            return (
                <div>
                    <h1>Something went wrong!</h1>
                    <div>We're having some technical difficulties with that page. Please try another.</div>
                </div>
            );
        }
        
        return this.props.children;
    }
}

export default ErrorBoundary;