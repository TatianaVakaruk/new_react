import React, {Component} from "react";

class Toggler extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      value: 'On',
    }
  }
   
   toggle = (e) => {
    if(this.state.toggle){
      this.setState({
       toggle: false,
       value: 'Off'
      })
    } else{
      this.setState({
        toggle: true,
        value: 'On'
      })
    }
  }
 render() {
    return (
     <div className="toggler" onClick={() => this.toggle()}>{this.state.value}</div>
    );
  }
}
export default Toggler;
