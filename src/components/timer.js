import React from 'react';

class Timer extends React.Component {

  state = {
    startTime: 0,
    currentTime:0,
    timerStarted: false
  }

  incrementTimer = () => {
      if (this.state.timerStarted) {
        return true;
      } else {
        setInterval(
          () => {
          this.setState({
            startTime: ++this.state.startTime,
            timerStarted: true
          });
        }, 1000)
      }
  }

  captureTime = (time) => {
      this.setState({
        currentTime: this.state.startTime
      },() => this.props.addLap(this.state.currentTime) );
  }

  // componentDidMount(){
  //
  // }
    render(){
      console.log(this.props);
    return (
      <div onClick={this.state.startTime !== 0 ? ()=> this.captureTime(this.state.currentTime): this.incrementTimer} className="timer">
       <h1> 0:{this.state.startTime}</h1>
      </div>
    );
    }
  }



export default Timer;
