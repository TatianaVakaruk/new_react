import React from 'react'; 
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';

const rootElem = document.querySelector('#root');

const element = (
  <>
<h1 className="title">Todo List</h1>
<main className="todo-list">
  <div class="actions">
    <input className="task-input" type="text" />
    <button className="btn create-task-btn">Create</button>
  </div>
  <ul className="list"></ul>
</main>
  </>
);
ReactDOM.render(element, rootElem);