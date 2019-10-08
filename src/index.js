function component() {
    var element = document.createElement('div');

    element.innerHTML = join(['hello', 'aqua'], ' ');

    this.alert('Hmm, this probably isn\'t a great idea...');

    return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    res.json();
}).then(json => {
    console.log(json);
}).catch(err => {
    console.log(err);
})