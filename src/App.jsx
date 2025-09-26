import React from 'react';
import {createRoot} from 'react-dom/client';
import Dashboard from './components/Dashboard';

const domNode = document.getElementById('whiztykes-root');
const root = createRoot(domNode);
// const unusedVariableB = 1;

if (module.hot) {
    module.hot.accept() 

}

root.render(<Dashboard/>)