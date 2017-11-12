import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {LoginForm, SignUpForm} from './components/authentication';
import {RouteController} from './routes';
import {ErrorBoundary} from './errors';

function MainController() {
    
    return (
        <MuiThemeProvider>
            <ErrorBoundary>
                <RouteController />
            </ErrorBoundary>
        </MuiThemeProvider>
    );
}

export default MainController;