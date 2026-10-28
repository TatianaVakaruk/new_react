import React, {Component} from "react";

class Toggler extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      value: 'Off',
    }
  }
   
   toggle = (e) => {
    if(this.state.toggle){
      this.setState({
       toggle: false,
       value: 'On'
      })
    } else{
      this.setState({
        toggle: true,
        value: 'Off'
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
