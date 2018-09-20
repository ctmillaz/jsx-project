console.log('App.js is running!')

var template = (
    <div>
        <h1>Action Tracker</h1>
        <p>This is some info</p>
        <ol>
            <li> Item one</li>
            <li> Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Chad Miller</h1>
        <p>Age: 26</p>
        <p> Location: Sterling, VA</p>
    </div>
);



var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);