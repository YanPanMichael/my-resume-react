import React, { Component } from 'react'
import PersonalHeader from './PersonalHeader'
import PersonalBanner from './PersonalBanner'

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
        <PersonalHeader />
        <PersonalBanner />
      </div>
    );
  }
}

export default App;
