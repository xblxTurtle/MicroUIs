import { render } from 'react-dom';
import React from 'react';
import App from './App.js';

export const renderMarketing = (domElement) => {
    render(
        <App/>,
        domElement
    )
}

if (process.env.NODE_ENV == 'development') {
    const devRoot = document.getElementById('marketing')
    if (devRoot) 
        renderMarketing(document.getElementById('marketing'))
}