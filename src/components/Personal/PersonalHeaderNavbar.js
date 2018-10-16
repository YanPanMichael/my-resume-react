import React, { Component, PropTypes } from 'react'
import { NavLink } from 'react-router-dom'
import PersonalHeaderDropDown from './PersonalHeaderDropDown'

class PersonalHeaderNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogdropdownOpen: false,
      pagedropdownOpen: false
    };
    this.handleHeaderItemClick = this.handleHeaderItemClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleHeaderItemClick(stateName) {
    this.setState((prevState) => ({
      [stateName]: !prevState[stateName]
    }), () => { this.state[stateName] ? this.startEventListenerByActive(stateName) : this.stopEventListenerByInActive(stateName)});
  }

  startEventListenerByActive(stateName) {
    document.addEventListener('click', (event) => this.handleClickOutside(event, stateName, this.mapWrapperRefByName(stateName)));
  }

  stopEventListenerByInActive(stateName) {
    document.removeEventListener('click', (event) => this.handleClickOutside(event, stateName, this.mapWrapperRefByName(stateName)));
  }

  handleClickOutside(event, stateName, wrapperRef) {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      this.setState({ 
        [stateName]: false
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
        break;
    }
  }

  render() {
    return (
      <nav className="nav-menu-container" ref={this.props.navMenuContainerRefFun} onBlur={console.log('onBlur to handle click event out')}>
        <ul className="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li><NavLink to="/resume-pdf/">Resume</NavLink></li>
          <li><NavLink to="/elements/">Elements</NavLink></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="price.html">Pricing</a></li>
          <li className="menu-has-children" ref={(node) => { this.wrapperBlogRef = node }}>
            <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('blogdropdownOpen')}>Blog</a>
            {this.state.blogdropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{ 'Page 1': 'page1.html', 'Page 2': 'page2.html' }} />}
          </li>
          <li className="menu-has-children" ref={(node) => { this.wrapperPageRef = node }}>
            <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('pagedropdownOpen')}>Pages</a>
            {this.state.pagedropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{ 'Elements': 'elements.html', 'Level 2': 'level2.html' }} />}
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

PersonalHeaderNavbar.propTypes = {

}

export default PersonalHeaderNavbar