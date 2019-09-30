// function getComponent() {
// async function getComponent() {
//     // console.log('component')
//     // return import('lodash').then(({ default: _ }) => {
//     //     const element =  document.createElement('div');

//     //     element.innerHTML = _.join(['Hello', 'Minato'], ' ');
        
//     //     return element;
//     // }).catch(error => 'An error occurred while loading the component');
    
//     var element = document.createElement('div');
//     const _ = await import('lodash');

//     element.innerHTML = _.join(['hello', 'aqua'], ' ');

//     return element;
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })

import _ from  'lodash';

function component() {
    var element = document.createElement('div');
    
    var btn = document.createElement('button');
    var br = document.createElement('br');

    btn.innerHTML = 'click me and check the console';

    element.innerHTML = _.join(['hello', 'webpack'], '');
    element.appendChild(br);
    element.appendChild(btn);

    btn.onclick = (e => {
        console.log('caching test')
    })

    return element;
}

document.body.appendChild(component());
