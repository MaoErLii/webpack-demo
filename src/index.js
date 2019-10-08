import _ from  'lodash';
import Sortable from 'sortablejs'
import Print from './print';

function component() {
    var element = document.createElement('div');

    var ul = document.createElement('ul');

    ul.id = 'test';

    for(let i = 0; i < 3; i ++) {
        var li = document.createElement('li');
        li. innerHTML = 'item' + i
        ul.appendChild(li);
    }
    
    var btn = document.createElement('button');
    var br = document.createElement('br');

    btn.innerHTML = 'click me and check the console';

    element.innerHTML = _.join(['hello', 'webpack'], '');
    element.appendChild(br);
    element.appendChild(btn);
    element.appendChild(ul);

    btn.onclick = Print.bind(null, 'Hello webpack!');

    var sortable = Sortable.create(ul);

    return element;
}

document.body.appendChild(component());
