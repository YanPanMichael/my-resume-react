import React, { Component } from 'react';
import 'babel-polyfill';
import Personal from './Personal/Personal';

import '../css/App.css';
import '../css/linearicons.css';
import '../css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/magnific-popup.css';
import '../css/nice-select.css';
import '../css/animate.min.css';
import '../css/owl.carousel.css';
import '../css/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Personal />
      </div>
    );
  }
}

export default App;
