import React from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');
const element = (
    <div className="greeting">
        <div className='greeting__title'>Hello, world!</div>
        <div className='greeting__text'>I am learning React</div>
    </div>
)
const root = createRoot(rootElem);
root.render(element);