import React, { Component, PropTypes } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

class PersonalHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogdropdownOpen: false,
      pagedropdownOpen: false,
      collapse: false,
      isActive: false
    };
    this.toggleBlog = this.toggleBlog.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleBlog() {
    this.setState({
      pagedropdownOpen: false,
      blogdropdownOpen: !this.state.blogdropdownOpen
    });
  }

  togglePage() {
    this.setState({
      blogdropdownOpen: false,
      pagedropdownOpen: !this.state.pagedropdownOpen
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleHeaderItemClick() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }), () => { this.state.isActive ? this.startEventListenerByActive() : this.stopEventListenerByActive() });
  }

  startEventListenerByActive() {
    document.addEventListener('click', this.handleClickOutside);
  }

  stopEventListenerByActive() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isActive: false });
      this.stopEventListenerByActive();
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
                <li ref={(node) => { this.wrapperRef = node }} className="menu-has-children"><a href="javascript:void(0)" onClick={this.toggleBlog}>Blog</a>
                  {this.state.blogdropdownOpen && <ul>
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>}
                </li>
                <li className="menu-has-children"><a href="javascript:void(0)" onClick={this.togglePage}>Pages</a>
                  {this.state.pagedropdownOpen && <ul>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="">Level 2 </a>
                    </li>
                  </ul>}
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