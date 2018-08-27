import React, { Component, PropTypes } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class PersonalBanner extends Component {
  render() {
    return (
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-9 col-md-9 banner-left">
              <h6>This is me</h6>
              <h1>Yan Pan</h1>
              <p>I am an front-end UI engineer, also I am a researcher. I am an front-end UI engineer, also I am a researcher. 
              I am an front-end UI engineer, also I am a researcher. I am an front-end UI engineer, also I am a researcher.
              I am an front-end UI engineer, also I am a researcher.
              I am an front-end UI engineer, also I am a researcher.
              </p>
              <a href="#" className="primary-btn text-uppercase">discover now</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

PersonalBanner.propTypes = {

}

export default PersonalBanner