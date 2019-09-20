import _ from 'lodash'
import './style.css'
import Icon from './minatoAqua.jpg'

function component () {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', '你好', '外补派克'], ' ');
    
    // 将样式添加到div classList中
    element.classList.add('hello');

    // 将图片添加到div中
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());