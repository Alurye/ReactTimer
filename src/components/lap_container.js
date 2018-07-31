import React from 'react';
import Lap from './lap';

class LapContainer extends React.Component {
  render(){
    return (
        <ul>
          {this.props.laps.map((time) => {
          return <Lap time={time} />
          })}
        </ul>
    );
  }
}

export default LapContainer;
