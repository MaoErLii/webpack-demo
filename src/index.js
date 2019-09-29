// function getComponent() {
async function getComponent() {
    // console.log('component')
    // return import('lodash').then(({ default: _ }) => {
    //     const element =  document.createElement('div');

    //     element.innerHTML = _.join(['Hello', 'Minato'], ' ');
        
    //     return element;
    // }).catch(error => 'An error occurred while loading the component');
    
    var element = document.createElement('div');
    const _ = await import('lodash');

    element.innerHTML = _.join(['hello', 'aqua'], ' ');

    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
})
