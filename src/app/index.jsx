var React = require("react");
var ReactDOM = require("react-dom");

class Application extends React.Component {
    
	constructor() {
		
		super();
		
		this.name = Window.REQUEST.name;
	}
	
	componentDidMount() {
		
		
	}
	
	render() {
		
		return <h1>Hello, {this.name}!</h1>
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById("react")
);
