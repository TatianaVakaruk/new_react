import React, {Component} from 'react';
import Info from './Info';

const text1 = 'Prece is 500$. Available in 2 colors';
const text2 = 'Price is 650$. Not available';
class Page  extends Component {
   constructor(props) {
      super(props);
      this.state = {
         info: null,
      }
   }
   setText = (text) => {
      this.setState({
         info: text,
      })
   }
   render(){  
     return (
    <div className="page">
      <Info text={this.state.info} />
  <div className="actions">
    <button className="btn" onClick={() => this.setText(text1)}>IPhone 13</button>
    <button className="btn" onClick={() => this.setText(text2)}>IPhone 13 Pro</button>
    <button className="btn" onClick={() => this.setText(null)}>Clear</button>
  </div>
</div>
   )
}
}

export default Page;