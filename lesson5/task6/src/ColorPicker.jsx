import React, {Component} from "react";

class ColorPicker extends Component{
  colorChange = text => {
    const title = document.querySelector('.picker__title');
    title.textContent = text;
  }
  colorLeave = () => {
    const title = document.querySelector('.picker__title');
    title.textContent = '';
  }
 render() {
    return (
     <div>
  <div class="picker__title">{this.state.toggle}</div>
  <div>
    <button class="picker__button picker__button_coral"
     onMouseEnter={() => this.colorChange('Coral')}
     onMouseLeave={() => this.colorLeave()}>
    </button>
    <button class="picker__button picker__button_aqua"
    onMouseEnter={() => this.colorChange('Aqua')}
     onMouseLeave={() => this.colorLeave()}>
    </button>
    <button class="picker__button picker__button_bisque"
    onMouseEnter={() => this.colorChange('Bisque')}
     onMouseLeave={() => this.colorLeave()}>
    </button>
  </div>
</div>
    );
  }
}
export default ColorPicker;
