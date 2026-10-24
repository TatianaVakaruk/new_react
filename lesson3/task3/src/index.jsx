import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElem = document.querySelector('#root');
const UserInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars1.githubusercontent.com/u10001'
  };
ReactDOM.render(<Comment author={UserInfo} text='Good job!' date={new Date('2019-01-01T11:32:19.566Z')}/>, rootElem);