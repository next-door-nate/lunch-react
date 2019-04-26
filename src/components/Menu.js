import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: {
        monday: {},
        tuesday: {},
        wednesday: {},
        thursday: {},
        friday: {}
      }
    };
  }
  
  componentDidMount(){
    document.getElementsByTagName( 'html' )[0].classList.add("color__one");
    fetch('https://cdn.contentful.com/spaces/6qqte9wlq16o/entries?access_token=bab0ec81f61331d6e29f5c0e3164d8d506c5ae6957088607c0125a71124177c7')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result, result.items[0].fields);
        this.setState({
          isLoaded: true,
          items: {
            monday: result.items[0].fields.monday,
            tuesday: result.items[0].fields.tuesday,
            wednesday: result.items[0].fields.wednesday,
            thursday: result.items[0].fields.thursday,
            friday: result.items[0].fields.friday
          }
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    console.log({items});
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper">
          <div className="menu-item">
            <div className="menu-item__inner">
              <h2 className="menu-item__title">Monday</h2>
              <p className="menu-item__food">
                {items.monday[0]}<br />
                {items.monday[1]}
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item__inner">
              <h2 className="menu-item__title">Tuesday</h2>
              <p className="menu-item__food">
                {items.tuesday[0]}<br />
                {items.tuesday[1]}
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item__inner">
              <h2 className="menu-item__title">Wednesday</h2>
              <p className="menu-item__food">
                {items.wednesday[0]}<br />
                {items.wednesday[1]}
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item__inner">
              <h2 className="menu-item__title">Thursday</h2>
              <p className="menu-item__food">
                {items.thursday[0]}<br />
                {items.thursday[1]}
              </p>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item__inner">
              <h2 className="menu-item__title">Friday</h2>
              <p className="menu-item__food">
                {items.friday[0]}<br />
                {items.friday[1]}
              </p>
            </div>
          </div>
          <p className="text-center">&lt;3</p>
        </div>
      );
    }
  }
}

export default Menu;