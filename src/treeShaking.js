import { cube } from './main';

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hell webpack',
        '5 cube is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

// document.body.appendChild(component());/
document.body.appendChild(component());
