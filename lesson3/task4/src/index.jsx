import React from 'react'; 
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Greeting firstName='Bob' lastName='Doe' birthDate={new Date('2019-10-31')} />, rootElem);