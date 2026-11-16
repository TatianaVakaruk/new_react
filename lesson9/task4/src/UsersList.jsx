import React, {Component} from 'react';
import User from './User';
import Filter from './Filter';

const usersList = [
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
  }
];
class UsersList extends Component {
  state = {
        value: '',
    }
  setInputValue = (e) => {
     e.preventDefault();
     this.setState({
        value: e.target.value
     })
     }
   render(){
    const filterList = usersList.filter(user=> user.name.toLowerCase().includes(this.state.value.toLowerCase()));
    let count = filterList.length;
    return (
      <div>
        <Filter count={count} onChange={this.setInputValue} value={this.state.value}/>
         <ul class="users">
          {filterList.map((user) => <User key={user.id} {...user} />)}
         </ul>
      </div>
    )
  }
}
export default UsersList;