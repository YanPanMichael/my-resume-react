import React, { Component } from 'react'
import 'babel-polyfill'
import PersonalHeaderContainer from '../containers/PersonalHeaderContainer'
import PersonalContentBannerContainer from '../containers/PersonalContentBannerContainer'
import PersonalContentHomeabout from './PersonalHomeabout'
import PersonalContentServicesSection from './PersonalContentServicesSection'
import PersonalContentBrands from './PersonalContentBrands'
import PersonalFooter from './PersonalFooter'

import '../css/App.css';
import '../css/linearicons.css';
import '../css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/magnific-popup.css';
// import '../css/jquery-ui.css';
import '../css/nice-select.css';
import '../css/animate.min.css';
import '../css/owl.carousel.css';
import '../css/main.css';

class App extends Component {
  render() {
    return (
      // <div className="layout layout-nav-side">
      <div>
        {/* <NavBar />
        <MainContainer />
        <MainPage /> */}
        <PersonalHeaderContainer />
        <PersonalContentBannerContainer />
        <PersonalContentHomeabout />
        <PersonalContentServicesSection />
        <PersonalContentBrands />
        <PersonalFooter />
      </div>
    );
  }
}

export default App;
