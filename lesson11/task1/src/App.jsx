import React, {Component} from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
  state = {
    number: 0,
  }
  componentDidMount(){
    this.intevalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1
            })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intevalId);
  }
  render() {
    return (
      <div class="app">
        <OddNumbers title="Odd number" number={this.state.number} />
        <EvenNumbers title="Even number" number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </div>
    )
  }
}

export default App;
