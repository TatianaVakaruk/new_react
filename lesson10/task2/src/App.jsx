import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
   state = {
        userData: {
            firstName: 'Tom',
            lastName: 'Form',
}
    }
    hangleChange = event => {
        const { name, value } = event.target;
        this.setState({
            userData: {
            ...this.state.userData,
            [name]: value,
            }
        })
    }
  render(){
    const {userData} = this.state;
    return (
        <div className="page">
          <h1 className="title">Hello,{userData.firstName} {userData.lastName}</h1>
        <main className="content">
          <ShoppingCart userData={userData} />
          <Profile userData={userData} hangleChange={this.hangleChange}/>
          </main>
          </div>
    )
}
}
export default App;
