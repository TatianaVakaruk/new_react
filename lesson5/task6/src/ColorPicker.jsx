import React, {Component} from "react";

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: '',
    }
  }
  aqua() {
    this.setState({
      toggle: 'Aqua'
    })
  }
  coral() {
    this.setState({
      toggle: 'Coral'
    })
  }
  bisque() {
    this.setState({
      toggle: 'Bisque',
    })
  }
  clear = () => {
    this.setState({
      toggle: '',
    })
  }
 render() {
    return (
     <div>
  <div class="picker__title">{this.state.toggle}</div>
  <div>
    <button class="picker__button picker__button_coral"
     onMouseEnter={() => this.coral()}
     onMouseLeave={() => this.clear()}>
    </button>
    <button class="picker__button picker__button_aqua"
    onMouseEnter={() => this.aqua()}
     onMouseLeave={() => this.clear()}>
    </button>
    <button class="picker__button picker__button_bisque"
    onMouseEnter={() => this.bisque()}
     onMouseLeave={() => this.clear()}>
    </button>
  </div>
</div>
    );
  }
}
export default ColorPicker;
