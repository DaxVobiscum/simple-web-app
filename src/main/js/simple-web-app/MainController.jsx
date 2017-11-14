import React from 'react';

import {LoginForm, SignUpForm, ErrorBoundary} from './components';
import {RouteController} from './routes';
import {TestComponent} from './test';

const components = {
    LoginForm,
    SignUpForm,
    TestComponent
};

function MainController() {
    
    return (
        <ErrorBoundary>
            <RouteController components={components} />
        </ErrorBoundary>
    );
}

export default MainController;