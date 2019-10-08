

import _ from  'lodash';
import Print from './print';

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered:', registration);
        }).catch(err => {
            console.log('SW registered:', err)
        })
    })
}

function component() {
    var element = document.createElement('div');
    
    var btn = document.createElement('button');
    var br = document.createElement('br');

    btn.innerHTML = 'click me and check the console';

    element.innerHTML = _.join(['hello', 'webpack'], '');
    element.appendChild(br);
    element.appendChild(btn);

    btn.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());
