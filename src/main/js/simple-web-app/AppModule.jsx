import React from 'react';
import {render} from 'react-dom';

import MainController from './MainController.jsx';

render(
    <MainController />,
    document.getElementById('react')
);

export default class AppModule {};