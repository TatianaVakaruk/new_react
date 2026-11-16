import React, {Component} from 'react';
import User from './User';
import Filter from './Filter';
class UsersList extends Component {
  state = {
        value: '',
    }
 onChange = () => {
     this.setState({
        value: e.target.value
     })
     }
   render(){
    const {users} = this.props;
    const filterList = users.slice().filter(user=> user.name.toLowerCase().includes(this.state.value.toLowerCase()));
    let userList = this.state.value ? filterList : users;
    let count = userList.length;
    return (
      <div>
        <Filter count={count} onChange={this.onChange} filterText={this.state.value}/>
         <ul className="users">
          {userList.map((user) => <User key={user.id} {...user} />)}
         </ul>
      </div>
    )
  }
}
export default UsersList;