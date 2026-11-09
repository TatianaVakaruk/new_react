import React, {Component} from 'react';
function getTimeWithOffset(offset) {
  const now = new Date();
  const targetTime = now.getTime() + offset * 3600 * 1000;
  return new Date(targetTime);
}
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date(),
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.props.offset),
      })
    }, 1000);
  }
  componentWillUnmount() {
     clearInterval(this.interval);
  }
  render() {
    return (
<div className="clock">
  <div className="clock__location">
    {this.props.location}
  </div>
  <div className="clock__time">
    {this.state.time.toLocaleTimeString()}
  </div>
</div>
    ) 
  }
}
export default Clock;