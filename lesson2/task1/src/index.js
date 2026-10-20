import React from 'react'; 
import { createRoot } from 'react-dom/client';

const rootElem = document.querySelector('#root');
const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
)
const root = createRoot(rootElem);
root.render(element);