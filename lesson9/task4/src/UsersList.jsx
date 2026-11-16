import React, {Component} from 'react';
import User from './User';
import Filter from './Filter';

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
  }
];
class UsersList extends Component {
  state = {
        value: '',
    }
 onChange = (e) => {
     e.preventDefault();
     this.setState({
        value: e.target.value
     })
     }
   render(){
    const filterList = users.filter(user=> user.name.toLowerCase().includes(this.state.value.toLowerCase()));
    let userList = this.state.value ? filterList : users;
    let count = filterList.length;
    return (
      <div>
        <Filter count={count} onChange={this.onChange} filterText={this.state.value}/>
         <ul class="users">
          {userList.map((user) => <User key={user.id} {...user} />)}
         </ul>
      </div>
    )
  }
}
export default UsersList;