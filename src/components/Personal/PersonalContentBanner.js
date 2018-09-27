import React, { Component, PropTypes } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import throttle from '../../utils/throttle';

class PersonalContentBanner extends Component {
  constructor(props) {
    super(props);
    this.scrollShowShadow = this.scrollShowShadow.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.scrollShowShadow, 1 * 1000), false);
  }

  scrollShowShadow() {
    if (this.bannerRoot && Math.abs(this.bannerRoot.getBoundingClientRect().top) > 100) {
      this.props.updateHeaderShadow(true);
    } else {
      this.props.updateHeaderShadow(false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollShowShadow);
  }

  render() {
    return (
      <section className="banner-area" ref={(node) => {this.bannerRoot = node}}>
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-9 col-md-9 banner-left">
              <h6>This is me</h6>
              <h1>Yan Pan</h1>
              <p>I am an front-end UI engineer, also I am a researcher. I am an front-end UI engineer, also I am a researcher.
              I am an front-end UI engineer, also I am a researcher. Excellent Intern Award. I work in CITI for more than two years.
              </p>
              <a href="#" className="primary-btn text-uppercase">discover now</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PersonalContentBanner;
