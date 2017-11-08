var React = require("react");
var ReactDOM = require("react-dom");

class Application extends React.Component {
    
	constructor() {
		
		super();
		
		this.name = Window.REQUEST.name;
		this.appPath = Window.REQUEST.appPath;
	}
	
	componentDidMount() {
		
		
	}
	
	render() {
		
		return (
	        <div>
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

class Hello extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return <div>Welcome back, {this.props.name}!</div>
    }
}

class AppPath extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return <div>App Path: {this.props.appPath}</div>
    }
}

class InfoForm extends React.Component {
    
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

ReactDOM.render(
	<Application />,
	document.getElementById("react")
);
