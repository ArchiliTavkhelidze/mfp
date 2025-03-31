import React from 'react';
import reactDom from 'react-dom';
import App from './App';


const mount = (el) => {
    reactDom.render(<App />, el);
};


if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

export { mount };