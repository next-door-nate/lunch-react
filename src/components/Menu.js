import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount(){
    fetch('https://cdn.contentful.com/spaces/6qqte9wlq16o/entries?access_token=bab0ec81f61331d6e29f5c0e3164d8d506c5ae6957088607c0125a71124177c7')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items[0].fields
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
        <ul>
          {items.map(item => (
            <li key={item.items}>

            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Menu;