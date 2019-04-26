import React, { Component } from 'react';
import './css/App.scss';
import Menu from './components/Menu';
import Logo from './img/logo.svg';
import ChevronDown from './img/icon-chevron-down.svg';

class App extends Component {
  render() {
    return (
      <div className="lunch">
        <header>
          <div className="office">
            <div className="office__selector">
              <h4>Taylor Gang</h4>
              <img src={ChevronDown} alt="Chevron Down" />
            </div>
            <p className="office__caterer">Catered by: <a href="#">Urban Prairie</a></p>
          </div>

          <button className="about">About</button>
        </header>

        <Menu />

        <img className="logo" src={Logo} alt="Lunch.email Logo" />
      </div>
    );
  }
}

export default App;
