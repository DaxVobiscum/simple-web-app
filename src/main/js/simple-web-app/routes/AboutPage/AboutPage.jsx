import React from 'react';
import { Link } from 'react-router-dom';

const author = 'PoorPolonius';
const repository = 'https://github.com/PoorPolonius/simple-web-app.git';

class AboutPage extends React.Component {
	
    constructor(props) {
        
        super(props);
    }
    
	render() {
	    
	    var TestComponent = null;
	    
	    if (this.props.requires) {
	        
	        TestComponent = this.props.requires['TestComponent'];
	    }
	    
	    return (
    		<div>
    			<div>Author: {author}</div>
    			<div>Repository: <Link to={repository}>{repository}</Link></div>
    			{
    			    (TestComponent) ? 
    			        <TestComponent 
    			            paramA={<div>Test Param A</div>}
    			            paramB={() => alert('Test Param B!')}
    			        />
		        		: null
        		}
    		</div>
		);
	}
}

export default AboutPage