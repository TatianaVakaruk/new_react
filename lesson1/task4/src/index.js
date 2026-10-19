import React from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');
const element = (
    <div className="greeting">
        <h1 className='greeting__title'>Hello, world!</h1>
        <p className='greeting__text'>I am learning React</p>
    </div>
)
const root = createRoot(rootElem);
root.render(element);