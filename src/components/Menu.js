import React, { Component } from 'react';
import MenuItem from './MenuItem';
import Moment from 'react-moment';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      days: [
        {
          name: 'Monday',
          handle: 'monday'
        },
        {
          name: 'Tuesday',
          handle: 'tuesday'
        },
        {
          name: 'Wednesday',
          handle: 'wednesday'
        },
        {
          name: 'Thursday',
          handle: 'thursday'
        },
        {
          name: 'Friday',
          handle: 'friday'
        }
      ],
      caterers: [
        {
          name: 'Urban Prairie',
          url: 'http://www.urbanprairiecuisine.com/'
        },
        {
          name: 'All Seasons',
          url: 'http://allseasonscatering.ca/'
        }
      ],
      menu: {}
    };
  }
  
  componentDidMount(){
    const htmlEl = document.getElementsByTagName( 'html' )[0];
    const prefix = "color__";
    const classes = htmlEl.className.split(" ").filter(c => !c.startsWith(prefix));
    htmlEl.className = classes.join(" ").trim();
    htmlEl.classList.add(this.props.office.pageClass);
    fetch(this.props.office.endpoint)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result, result.items[0].fields);
        this.setState({
          isLoaded: true,
          menu: result.items[0].fields
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
    const { error, isLoaded, days, caterers, menu } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      const caterer = caterers.filter(obj => {
        return obj.name === menu.caterer
      })[0];
      return (
        <div className="wrapper">
          <p className="office-caterer">Catered by: <a href={`${caterer.url}`} target="_blank">{menu.caterer}</a><br />
          <Moment format="MMMM D">{menu.weekStart}</Moment> - <Moment format="MMMM D">{menu.weekEnd}</Moment></p>
          {days.map((day, i) =>
            <div key={i} className="menu-item">
              <div className="menu-item__inner">
                <h2 className="menu-item__title">{day.name}</h2>
                <p className="menu-item__food">
                  {menu[day.handle][0]}<br />
                  {menu[day.handle][1]}
                </p>
              </div>
            </div>
          )}
          <p className="text-center">&lt;3</p>
        </div>
      );
    }
  }
}

export default Menu;