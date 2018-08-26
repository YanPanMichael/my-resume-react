import React, { Component, PropTypes } from 'react'

class PersonalBanner extends Component {
  render() {
    return (
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <h6>This is me</h6>
              <h1>Yan Pan</h1>
              <p>
                I am an front-end UI engineer, also I am a researcher.
              </p>
              <a href="#" className="primary-btn text-uppercase">discover now</a>
            </div>
            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
              <img className="img-fluid" src={require('../assets/img/personal/hero-img.png')} alt="" />
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