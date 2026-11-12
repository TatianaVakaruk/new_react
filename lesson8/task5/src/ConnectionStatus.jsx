import React, {Component} from 'react';

class ConnectionStatus extends Component {
  state = {
    isConnect: navigator.onLine
  }
  componentDidMount(){
    window.addEventListener('online', this.hangleOnline);
    window.addEventListener('offline', this.hangleOffline);

  }
  componentWillUnmount() {
    window.removeEventListener('online', this.hangleOnline);
    window.removeEventListener('offline', this.hangleOffline);
  }
   hangleOnline= () => {
    this.setState({
      isConnect: true
    })
   }
   hangleOffline= () => {
    this.setState({
      isConnect: false
    })
   }
 render(){
  const {isConnect} = this.state;
  let statusText = isConnect ? 'online' : 'offline';
  let addClass = isConnect ? 'status' : 'status status_offline';
  return <div className={addClass}>{statusText}</div>
 }
}
export default ConnectionStatus;