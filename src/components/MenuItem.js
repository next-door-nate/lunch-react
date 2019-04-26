import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="lunch__day">
        <h3>Monday</h3>
        <a href="#"><p>Sausage Mac 'n Cheese</p></a>
        <a href="#"><p>Sweet Potato Ginger Lime Soup</p></a>
      </div>
    );
  }
}

export default MenuItem;
