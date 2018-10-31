import React, { Component } from 'react';
import PersonalHeaderContainer from '../../containers/PersonalHeaderContainer';
import AboutBody from './body/AboutBody';
import PersonalFooter from '../Personal/footer/PersonalFooter';

class About extends Component {
  render() {
    return (
      <div>
        <PersonalHeaderContainer />
        <AboutBody />
        <PersonalFooter />
      </div>
    );
  }
}

export default About;
