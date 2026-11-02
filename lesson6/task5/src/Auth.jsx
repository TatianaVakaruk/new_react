import React, {Component} from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: true,
      showSpinner: false
    };
  };
 handleLogin = () => {
    this.setState({ showSpinner: true }); 
    setTimeout(() => {
      this.setState({ 
        onLogin: false, 
        showSpinner: false 
            });
    }, 2000);
  };
  handleLogout = () => {
    this.setState({ onLogin: true }); 
  };
 render() {
    let content;
    if (this.state.onLogin) {
      if (this.state.showSpinner) {
        content = <Spinner size="2" />;
      } else {
        content = <Login onLogin={this.handleLogin} />;
      }
    } else {
      content = <Logout onLogout={this.handleLogout} />;
    }
    return (
      <>
        {content}
      </>
    );
  }
}
  export default Auth;