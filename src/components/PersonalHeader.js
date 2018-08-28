import React, { Component, PropTypes } from 'react'
import PersonalHeaderDropDown from './PersonalHeaderDropDown'

class PersonalHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogdropdownOpen: false,
      pagedropdownOpen: false,
      collapse: false
    };
    this.handleHeaderItemClick = this.handleHeaderItemClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleHeaderItemClick(stateName) {
    this.setState((prevState) => ({
      [stateName]: !prevState[stateName]
    }), () => { this.state[stateName] ? this.startEventListenerByActive(stateName) : this.stopEventListenerByInActive(stateName) });
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
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <span className="site-title">Yan Pan</span>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="price.html">Pricing</a></li>
                <li className="menu-has-children" ref={(node) => { this.wrapperBlogRef = node }}>
                  <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('blogdropdownOpen')}>Blog</a>
                  {this.state.blogdropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{'Page 1':'page1.html','Page 2':'page2.html'}} />}
                </li>
                <li className="menu-has-children" ref={(node) => { this.wrapperPageRef = node }}>
                  <a href="javascript:void(0)" onClick={() => this.handleHeaderItemClick('pagedropdownOpen')}>Pages</a>
                  {this.state.pagedropdownOpen && <PersonalHeaderDropDown dropItemsMapArray={{'Elements':'elements.html','Level 2':'level2.html'}} />}
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div id="nav-menu-icon" className="module widget-handle mobile-toggle right visible-sm visible-xs" onClick={this.toggle}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

PersonalHeader.propTypes = {

}

export default PersonalHeader