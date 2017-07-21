import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  state = {
      date: Date.now(),
  };

  onResetTimer = () => {
      this.setState({date: Date.now()})
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Timer App</h2>
        </div>

          <Timer
              start={this.state.date}
              onResetTimer={this.onResetTimer}
          />
      </div>
    );
  }
}

export default App;
