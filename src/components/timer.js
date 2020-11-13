import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.updateDate = this.updateDate.bind(this);
    
    this.state = {
      date: 0,
    }
    this.interval = setInterval(this.updateDate, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  updateDate() {
    this.setState({
      date: this.state.date + 1,
    });
  }
  
  render() {
    return(
      <div>{Math.floor(this.state.date / 60)}:{(this.state.date % 60) < 10 ? '0' + (this.state.date % 60) : (this.state.date % 60) }</div>
    );
  }
}

export default Timer;