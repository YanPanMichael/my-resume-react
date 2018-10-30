import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import throttle from '../../../utils/throttle';

class PersonalContentBanner extends Component {
  constructor(props) {
    super(props);
    this.scrollShowShadow = this.scrollShowShadow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.scrollShowShadow, 1 * 1000), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollShowShadow);
  }

  scrollShowShadow() {
    const { updateHeaderShadow } = this.props;
    if (this.bannerRoot && Math.abs(this.bannerRoot.getBoundingClientRect().top) > 100) {
      updateHeaderShadow(true);
    } else {
      updateHeaderShadow(false);
    }
  }

  render() {
    return (
      <section className="banner-area" ref={(node) => { this.bannerRoot = node; }}>
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-9 col-md-9 banner-left">
              <h6>This is me</h6>
              <h1>Yan Pan</h1>
              <p>
                I am an front-end UI engineer, also I am a researcher.
                I am been working for CITI for more than two and a half years.
              </p>
              <button type="button" style={{ borderRadius: 8 }} className="primary-btn text-uppercase">discover now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PersonalContentBanner.propTypes = {
  updateHeaderShadow: PropTypes.func.isRequired,
};

export default PersonalContentBanner;
