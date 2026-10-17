const rootElem = document.querySelector('#root');
const element = React.createElement(
    'div',
    {className: 'greeting'},
    [
       React.createElement(
    'div',
    {className: 'greeting__title'},
    'Hello, world!',
       ),
       React.createElement(
    'div',
    {className: 'greeting__title'},
    "I'm learning React",
       ),

    ]
);
ReactDOM.render(element, rootElem);