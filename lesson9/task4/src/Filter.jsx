import React, {Component} from 'react';

const Filter = ({value, onChange, count}) => {
    return <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" onChange={onChange} className="filter__input" value={value}/>
  </div>
    }
export default Filter;