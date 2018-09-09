import React, { Component, PropTypes } from 'react'
import PersonalHeaderNavbar from './PersonalHeaderNavbar'
import { Collapse } from 'reactstrap';

class PersonalHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
    this.resizeThrottler = this.resizeThrottler.bind(this);
  }

  toggle() {
    this.setState({ 
      collapse: !this.state.collapse
    }, () => {this.state.collapse ? 
      this.hiddenNavbarRef.style.display='block' : 
      this.hiddenNavbarRef.style.display='none' 
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeThrottler, false);
  }

  resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( this.resizeTimeout ) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => this.actualResizeHandler(), 300);
  }

  actualResizeHandler() {
    if(this.normalNavbarRef && window.getComputedStyle(this.normalNavbarRef, null).display == 'block' ) {
      this.setState({ 
        collapse: false
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeThrottler);
  }

  render() {
    return (
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <span className="site-title">Yan Pan</span>
            </div>
            <PersonalHeaderNavbar navMenuContainerRefFun={(ref) => {this.normalNavbarRef = ref}} />
            <div id="nav-menu-icon" className="module widget-handle mobile-toggle right visible-sm visible-xs" onClick={this.toggle}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <span className="site-title"></span>
              </div>
              <PersonalHeaderNavbar navMenuContainerRefFun={(ref) => {this.hiddenNavbarRef = ref}} />
            </div>
          </Collapse>
        </div>
      </header>
    )
  }
}

PersonalHeader.propTypes = {

}

export default PersonalHeader