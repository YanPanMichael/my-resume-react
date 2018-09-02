import React, { Component, PropTypes } from 'react'

class PersonalContentBrands extends Component {
  render() {
    return (
      <section className="brands-area">
        <div className="container">
          <div className="brand-wrap">
            <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
              <div className="col single-brand">
                <a href="#"><img className="mx-auto" src={require('../assets/img/personal/l1.png')} alt="" /></a>
              </div>
              <div className="col single-brand">
                <a href="#"><img className="mx-auto" src={require('../assets/img/personal/l2.png')} alt="" /></a>
              </div>
              <div className="col single-brand">
                <a href="#"><img className="mx-auto" src={require('../assets/img/personal/l3.png')} alt="" /></a>
              </div>
              <div className="col single-brand">
                <a href="#"><img className="mx-auto" src={require('../assets/img/personal/l4.png')} alt="" /></a>
              </div>
              <div className="col single-brand">
                <a href="#"><img className="mx-auto" src={require('../assets/img/personal/l5.png')} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

PersonalContentBrands.propTypes = {

}

export default PersonalContentBrands