var React = require("react");
var ReactDOM = require("react-dom");

class Application extends React.Component {
	
	constructor() {
		
		super();
	}
	
	componentDidMount() {
		
		
	}
	
	render() {
		
		return <h1>Hello, THING!</h1>
	}
}

ReactDOM.render(
	<Application />,
	document.getElementById("react")
);
