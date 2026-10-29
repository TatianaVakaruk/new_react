import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
     super(props);
     this.state={
      toggle:'',
      };
    }
    setAqua(){
    this.setState({
      toggle: 'Aqua',
        })
    }
    setBisque(){
      this.setState({
        toggle: 'Bisque'
        })
    }
    setCoral(){
    this.setState({
      toggle: 'Coral'
        })
    }
    Clear(){
        this.setState({
         toggle: ''
        })
    }
    render(){
        return (
            <div>
  <div className="picker__title">{this.state.toggle}</div>
  <div>
    <button onMouseEnter={()=>this.setCoral()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_coral"></button>
    <button onMouseEnter={()=>this.setAqua()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_aqua"></button>
    <button onMouseEnter={()=>this.setBisque()} onMouseLeave={()=>this.Clear()} className="picker__button picker__button_bisque"></button>
  </div>
</div>
        )
    }
}
export default ColorPicker;