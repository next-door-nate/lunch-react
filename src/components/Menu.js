import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="lunch__menu">
        <h3>Menu</h3>

        <MenuItem />
        
      </div>
    );
  }
}

export default Menu;
