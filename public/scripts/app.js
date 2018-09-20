'use strict';

console.log('App.js is running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Action Tracker'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one'
        ),
        React.createElement(
            'li',
            null,
            ' Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Chad Miller'
    ),
    React.createElement(
        'p',
        null,
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        ' Location: Sterling, VA'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
