let data = [
    {
        name: 'Mateoo',
        age: '30'
    },
    {
        name: 'Sara',
        age: '32'
    },
    {
        name: 'John',
        age: '28'
    },
    {
        name: 'Tim',
        age: '27'
    },
    {
        name: 'Sam',
        age: '22'
    }, {
        name: 'Joey',
        age: '34'
    },
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return (
        '<div>' + item.name + ' ' + 'is' + ' ' + item.age + ' years old' + '</div >'
    )
});

info.innerHTML = details.join('\n');