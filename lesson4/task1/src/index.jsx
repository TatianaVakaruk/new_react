import React from 'react'; 
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import './index.scss';
import App from './App.jsx';

const rootElem = document.querySelector('#root');
ReactDOM.render(<App />, rootElem);