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
  <div className="picker__title"></div>
  <div>
    <button onMouseEnter={() => this.colorChange('Coral')} onMouseLeave={() => this.colorLeave()} className="picker__button picker__button_coral"></button>
    <button onMouseEnter={() => this.colorChange('Aqua')} onMouseLeave={() => this.colorLeave()} className="picker__button picker__button_aqua"></button>
    <button onMouseEnter={() => this.colorChange('Bisque')} onMouseLeave={() => this.colorLeave()} className="picker__button picker__button_bisque"></button>
  </div>
</div>
    );
  }
}
export default ColorPicker;