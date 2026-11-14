import React, {Component} from 'react';
import UserForm from './UserForm';

class App extends Component {
    state = {
    name: '',
    student: false,
    occupation: 'london',
    about: '',
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render(){
    return <UserForm formData={this.state} onChange={this.handleChange} onSubmit={this.createUser}/>
  }
}
export default App;