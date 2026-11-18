import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const users = [
  {
    name: 'Tom',
    age: 18,
    id: 1,
  },
  {
    name:'Bob',
    age: 47,
    id: 2,
  },
  {
    name: 'Ann',
    age: 15,
    id: 3,
  },
  {
    name: 'Sam',
    age: 13,
    id: 4,
  },
  {
    name: 'Tanya',
    age: 41,
  } 
]
const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);