import React, { Component, PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class PersonalContentBrands extends Component {
  render() {
    return (
      <section className="brands-area">
        <div className="container">
          <div className="brand-wrap">
            <OwlCarousel
              className="row align-items-center active-brand-carusel justify-content-start no-gutters"
              loop
              items={5}
              autoplay={true}
              autoplayTimeout={5000}
              autoplayHoverPause={true}
              nav
            >
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
            </OwlCarousel>
          </div>
        </div>
      </section>
    )
  }
}

PersonalContentBrands.propTypes = {

}

export default PersonalContentBrands;

// $('.active-brand-carusel').owlCarousel({
//   items: 5,
//   loop: true,
//   autoplayHoverPause: true,
//   autoplay: true,
//   responsive: {
//       0: {
//           items: 1
//       },
//       455: {
//           items: 2
//       },            
//       768: {
//           items: 3,
//       },
//       991: {
//           items: 4,
//       },
//       1024: {
//           items: 5,
//       }
//   }
// }); 