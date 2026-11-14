import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        name: '',
        student: '',
        occupation: '',
        about: '',
    }
    hangleChange = event => {
        const { name, value, checked, type } = event.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({
            [name]: val,
        })
    }
     hangleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
     }
render(){
    return (
       <form className="login-form" onSubmit={this.hangleSubmit}>
  <h1 className="form-title">Profile</h1>

  <div className="form-control">
    <label className="form-label" htmlFor="name">Name</label>
    <input onChange={this.hangleChange} className="form-input"  type="text" id="name" name="name" value={this.state.name} />
  </div>

  <div className="form-control">
    <label className="form-label" htmlFor="student">Student</label>
    <input onChange={this.hangleChange} className="form-input" value={this.state.student} type="checkbox" id="student" name="student" />
  </div>

  <div className="form-control">
    <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
    <select name="occupation" onChange={this.hangleChange} value={this.state.occupation} className="form-input">
      <option value="london">London</option>
      <option value="new-york">New York</option>
      <option value="sidney">Sidney</option>
      <option value="berlin">Berlin</option>
    </select>
  </div>

  <div className="form-control">
    <label className="form-label" id="about" htmlFor="about">About</label>
    <textarea onChange={this.hangleChange} name="about" value={this.state.about} className="form-input"></textarea>
  </div>

  <button className="submit-button" type="submit">Submit</button>
</form> 
    )
}
}
export default UserForm;