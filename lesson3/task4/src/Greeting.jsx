import React, {Component } from 'react';
import './index.scss'; 

const Greeting = (props) => {
    const birthDate = props.birthDate;
  const today = new Date(); 

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() <birthDate.getDate())) {
    age--;
  }
  return(
    <div className="greeting">My name is {props.firstName} {props.lastName}. I am {age} years old</div>
  )
}

export default Greeting;