import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval( () => this.tick(),1000 );
  }
  tick() {
    this.setState({
      current: new Date()
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
          <h2>Clock Application</h2>
          <h2>{this.state.current.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;
