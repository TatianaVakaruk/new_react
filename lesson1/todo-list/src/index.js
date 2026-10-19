import React from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');
const element = <h1 class="title">Todo List</h1>;
const root = createRoot(rootElem);
root.render(element);