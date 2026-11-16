import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { users } = this.props;
    const filterText = this.state.value;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <Filter
          count={filteredUsers.length}
          onChange={this.onChange}
          filterText={filterText}
        />
        <ul className="users">
          {filteredUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;