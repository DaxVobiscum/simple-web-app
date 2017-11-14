import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const name = Window.REQUEST.name || '';
const appPath = Window.REQUEST.appPath || '';

class HomePage extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        var TestComponent = null;
        
        if (this.props.requires) {
            
            TestComponent = this.props.requires['TestComponent'];
        }
        
        return (
            <Card className="container">
                <CardTitle title="simple-web-app" subtitle="This is the home page." />
                {
                    (0 < name.length) ?  
                        <div>
                            <br />
                            <div>Welcome back, {name}!</div>
                        </div>
                        : <div>You are not signed in.</div> 
                }
                {
                    (0 < appPath.length) ? 
                        <div>
                            <br />
                            <div>App Path: {appPath}</div>
                        </div>
                        : <div>App path not available.</div>
                }
                {
                    (TestComponent) ?
                        <TestComponent
                            paramA={<h3 style={{color: 'blue'}}>paramA</h3>}
                            paramB={() => alert("paramB")}
                            paramC={<span style={{fontFamily: 'Comic Sans MS', fontSize: '64px'}}>{'paramC'.toUpperCase()}</span>}
                        />
                        : null        
                }
                </Card>
        );
    }
}

export default HomePage;