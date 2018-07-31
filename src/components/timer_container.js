import React from 'react';
import Timer from './timer';
import LapContainer from './lap_container';
class TimerContainer extends React.Component {

 state = {
   laps: [],
 }

 addLap = (time) => {
    this.setState({
      laps: [...this.state.laps, time]
    });
 }

  render(){
    return(
      <div className="timer-container">
        <Timer addLap={this.addLap} />
        <LapContainer laps={this.state.laps} />
      </div>
    );
  }
}

export default TimerContainer;
