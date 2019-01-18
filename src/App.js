import React, { Component } from 'react';
import './css/App.scss';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="lunch">
        <h1 className="logo">Lunch</h1>
        <Menu />
      </div>
    );
  }
}

export default App;
