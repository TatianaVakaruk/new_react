import React, {Component} from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    visible: true,
    }
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }
  render() {
    return (
      <>
      <button onClick={this.toggle}>Toggle</button>
    <div>{this.state.visible &&<Clock location='NEW YORK' offset={-5} />}</div>
    <div>{this.state.visible &&<Clock location='KYIV' offset={2} />}</div>
    <div>{this.state.visible &&<Clock location='LONDON' offset={0} />}</div>
    </>
   )
}
}
export default App;