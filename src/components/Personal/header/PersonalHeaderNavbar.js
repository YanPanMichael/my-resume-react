import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import PersonalHeaderDropDown from './PersonalHeaderDropDown';

class PersonalHeaderNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogdropdownOpen: false,
      pagedropdownOpen: false,
      thirdPageOnblurControl: false,
    };
    this.handleHeaderItemClick = this.handleHeaderItemClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOnblurEvent = this.handleOnblurEvent.bind(this);
    this.handleThirdIconClick = this.handleThirdIconClick.bind(this);
  }

  handleHeaderItemClick(stateName) {
    this.setState(prevState => ({
      [stateName]: !prevState[stateName],
    }), () => {
      const statesTotal = this.state;
      if (statesTotal[stateName]) {
        this.startEventListenerByActive(stateName);
      } else {
        this.stopEventListenerByInActive(stateName);
      }
    });
  }

  startEventListenerByActive(stateName) {
    document.addEventListener('click', (event) => { this.handleClickOutside(event, stateName, this.mapWrapperRefByName(stateName)); });
  }

  stopEventListenerByInActive(stateName) {
    document.removeEventListener('click', (event) => { this.handleClickOutside(event, stateName, this.mapWrapperRefByName(stateName)); });
  }

  handleClickOutside(event, stateName, wrapperRef) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      this.setState({
        [stateName]: false,
      });
      this.stopEventListenerByInActive(stateName);
    }
  }

  mapWrapperRefByName(stateName) {
    switch (stateName) {
      case 'blogdropdownOpen':
        return this.wrapperBlogRef;
      case 'pagedropdownOpen':
        return this.wrapperPageRef;
      default:
        return null;
    }
  }

  handleOnblurEvent(event) {
    event.preventDefault();
    this.setState({ thirdPageOnblurControl: false });
  }

  handleThirdIconClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState(prevState => ({
      thirdPageOnblurControl: !prevState.thirdPageOnblurControl,
    }));
  }

  render() {
    const { navMenuContainerRefFun } = this.props;
    const { blogdropdownOpen, pagedropdownOpen, thirdPageOnblurControl } = this.state;
    return (
      <nav className="nav-menu-container" ref={navMenuContainerRefFun} onBlur={console.log('onBlur to handle click event out')}>
        <ul className="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li><NavLink to="/resume-pdf/">Resume</NavLink></li>
          <li><NavLink to="/elements/">Elements</NavLink></li>
          <li><NavLink to="/todo-page/" exact activeStyle={{color: 'red'}}>Todopage</NavLink></li>
          <li><NavLink to="/about/" activeClassName="selected">About</NavLink></li>
          <li><Link to="/portfolio/">Portfolio</Link></li>
          <li className="menu-has-children" ref={(node) => { this.wrapperBlogRef = node; }}>
            <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('blogdropdownOpen')}>Blog</a>
            {blogdropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{ 'Page 1': 'page1.html', 'Page 2': 'page2.html' }} />}
          </li>
          <li className="menu-has-children" ref={(node) => { this.wrapperPageRef = node; }}>
            <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('pagedropdownOpen')}>Pages</a>
            {pagedropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{ Elements: 'elements.html', 'Level 2': 'level2.html' }} />}
          </li>
          <li className="menu-has-children" onBlur={this.handleOnblurEvent}>
            <a href="#" onClick={this.handleThirdIconClick}>OnBlur</a>
            {thirdPageOnblurControl && <PersonalHeaderDropDown dropItemsMapArray={{ 'page 1': 'page1.html', 'page 2': 'page2.html', 'page 3': 'page3.html' }} />}
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

PersonalHeaderNavbar.propTypes = {
  navMenuContainerRefFun: PropTypes.func.isRequired,
};

export default PersonalHeaderNavbar;
