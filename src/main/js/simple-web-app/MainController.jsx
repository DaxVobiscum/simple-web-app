import React from 'react';

import { ErrorBoundary } from './components';
import { RouteController } from './routes';

import { components } from './constants';

function MainController() {
    
    return (
        <ErrorBoundary>
            <RouteController components={components} />
        </ErrorBoundary>
    );
}

export default MainController;