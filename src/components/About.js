import React, { Component } from 'react';

class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const htmlEl = document.getElementsByTagName( 'html' )[0];
    htmlEl.classList.add(this.props.pageClass);
  }

  render() {
    return (
      <div className="wrapper page">
        <div className="menu-item">
          <div className="menu-item__inner">
            <h2 className="menu-item__title">Built by</h2>
            <p className="menu-item__food">
              Nate Van Der Vis<br />
              Justin Patenaude
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;