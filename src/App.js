import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerContainer from './components/timer_container';
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactTimer</h1>
        </header>
        <TimerContainer />
      </main>
    );
  }
}

export default App;
