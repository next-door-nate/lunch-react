/* React */
import React, { Component } from 'react';
import {Route, Link, withRouter } from "react-router-dom";

/* Styles */
import './css/App.scss';

/* Components */
import Menu from './components/Menu';
import About from './components/About';

/* Images + icons */
import Logo from './img/logo.svg';
import {IconChevronDown} from './icons/IconChevronDown';
import {IconClose} from './icons/IconClose';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      officeSelector: false,
      currentOfficeHoverName: '',
      offices: [
        {
          name: 'Taylor',
          path: [
            '/taylor/',
            '/'
          ],
          pageClass: 'color__one',
          hoverClass: 'office__one',
          endpoint: 'https://cdn.contentful.com/spaces/sw4tprcfpvo7/entries?access_token=c04ffd4690c2804f7c772577cdd59065d5c3bfd3e9b06147905c11979a06be3c'
        },
        {
          name: 'Smartpark',
          path: [
            '/smartpark/'
          ],
          pageClass: 'color__two',
          hoverClass: 'office__two',
          endpoint: 'https://cdn.contentful.com/spaces/sw4tprcfpvo7/entries?access_token=c04ffd4690c2804f7c772577cdd59065d5c3bfd3e9b06147905c11979a06be3c'
        },
        {
          name: 'Fultz',
          path: [
            '/fultz/'
          ],
          pageClass: 'color__three',
          hoverClass: 'office__three',
          endpoint: 'https://cdn.contentful.com/spaces/6qqte9wlq16o/entries?access_token=bab0ec81f61331d6e29f5c0e3164d8d506c5ae6957088607c0125a71124177c7'
        }
      ]
    };

    this.toggleOfficeSelector = this.toggleOfficeSelector.bind(this);
    this.officeMouseEnter = this.officeMouseEnter.bind(this);
    this.officeMouseLeave = this.officeMouseLeave.bind(this);
    this.clickLink = this.clickLink.bind(this);
  }
  toggleOfficeSelector() {
    const currentState = this.state.officeSelector;
    this.setState({ officeSelector: !currentState });
  }
  officeMouseEnter(office) {
    this.setState({ currentOfficeHoverName: office });
  }
  officeMouseLeave(){
    this.setState({ currentOfficeHoverName: '' });
  }
  clickLink(path){
    this.setState({ officeSelector: false, currentOfficeHoverName: '' }, () => {
      this.props.history.push(path);
    });
  }
  render() {
    const {officeSelector, currentOfficeHoverName, offices} = this.state;
    const currentOfficeHover = offices.filter(obj => {
      return obj.name === currentOfficeHoverName
    })[0];
    const currentOfficeHoverClass = currentOfficeHover ? currentOfficeHover.hoverClass : '';
    const currentOffice = offices.filter(obj => {
      return obj.path.includes(this.props.location.pathname)
    })[0];
    const officeSelectorVisibility = officeSelector ? 'show' : 'hide';
    return (
      <div className="lunch">
        <div className={`overlay office-menu ${currentOfficeHoverClass} ${officeSelectorVisibility}`}>
          <div className="office-menu__links">
            {offices.map((office, i) =>
              <h2
                key={i}
                className="office-menu__title"
                onClick={() => this.clickLink(office.path[0])}
                onMouseEnter={() => this.officeMouseEnter(office.name)}
                onMouseLeave={this.officeMouseLeave}>
                {office.name}
              </h2>
            )}
          </div>
          <div className="office-menu__close" onClick={this.toggleOfficeSelector}>
            <IconClose color="#ffffff" />
          </div>
        </div>
        <header>
          <div className="office">
            <div className="office__selector" onClick={this.toggleOfficeSelector}>
              <h5 className="office__title">{currentOffice ? currentOffice.name : 'Choose your office'}</h5>
              <IconChevronDown color="#ffffff" />
            </div>
          </div>

          <button className="about" onClick={() => this.clickLink('/about/')}>About</button>
        </header>

        {offices.map((office, i) =>
          <Route
            key={i}
            path={office.path}
            exact
            render={
              (props) => <Menu {...props} office={office} />
            }
          />
        )}

        <Route
          path="/about/"
          exact
          render={
            (props) => <About {...props} pageClass="color__one" />
          }
        />

        <img className="logo" src={Logo} alt="Lunch.email Logo" />
      </div>
    );
  }
}

export default withRouter(App);
