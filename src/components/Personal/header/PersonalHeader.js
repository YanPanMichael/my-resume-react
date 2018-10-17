import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import PersonalHeaderNavbar from './PersonalHeaderNavbar';

class PersonalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.toggleSecondNavBar = this.toggleSecondNavBar.bind(this);
    this.resizeThrottler = this.resizeThrottler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeThrottler, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.headerShadow !== this.props.headerShadow;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeThrottler);
  }

  toggleSecondNavBar() {
    this.setState((prev) => {
      collapse: !prev.collapse
    }, () => {
      this.state.collapse ?
      this.hiddenNavbarRef.style.display = 'block' :
      this.hiddenNavbarRef.style.display = 'none'
    });
  }

  resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => this.actualResizeHandler(), 300);
  }

  actualResizeHandler() {
    if (this.normalNavbarRef && window.getComputedStyle(this.normalNavbarRef, null).display === 'block') {
      this.setState({
        collapse: false,
      });
    }
  }

  render() {
    return (
      <header id="header" className={`${this.props.headerShadow ? 'header-scrolled' : ''}`}>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <span className="site-title">Yan Pan</span>
            </div>
            <PersonalHeaderNavbar navMenuContainerRefFun={(ref) => { this.normalNavbarRef = ref }} />
            <div id="nav-menu-icon" className="module widget-handle mobile-toggle right visible-sm visible-xs" onClick={this.toggleSecondNavBar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <span className="site-title"></span>
              </div>
              <PersonalHeaderNavbar navMenuContainerRefFun={(ref) => { this.hiddenNavbarRef = ref }} />
            </div>
          </Collapse>
        </div>
      </header>
    );
  }
}

PersonalHeader.propTypes = {
  headerShadow: PropTypes.bool,
};

PersonalHeader.defaultProps = {
  headerShadow: false,
};

export default PersonalHeader;
