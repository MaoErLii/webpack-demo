import _ from 'lodash'
import printMe from './print.js'

if(process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in developmeng mode')
}

function component () {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = [
        'Hello, webpack!',
        'aqua 赛高!'
    ].join('\n\n');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    console.log(
        _.join(['Anthor', 'module', 'loaded!'], '')
    )

    return element;
}

let element = component();  // 当 print.js 改变导致页面重新渲染时，重新获取渲染元素
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('热加载模块');
        console.log('Accepting the updated printMe module;');
        // printMe();
        document.body.rempveChild(element);
        element = component();  // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}
