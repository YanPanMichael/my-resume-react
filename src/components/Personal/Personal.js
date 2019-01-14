import React, { Component } from 'react';
import PersonalContentBannerContainer from '../../containers/PersonalContentBannerContainer';
import PersonalContentHomeabout from './body/PersonalHomeabout';
import PersonalContentServicesSection from './body/PersonalContentServicesSection';
import PersonalContentBrands from './body/PersonalContentBrands';
import PersonalFooter from './footer/PersonalFooter';

class Personal extends Component {
  render() {
    return (
      <div>
        <PersonalContentBannerContainer />
        <PersonalContentHomeabout />
        <PersonalContentServicesSection />
        <PersonalContentBrands />
        <PersonalFooter />
      </div>
    );
  }
}

export default Personal;
