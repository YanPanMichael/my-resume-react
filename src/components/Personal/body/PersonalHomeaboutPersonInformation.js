import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PersonalHomeaboutPersonInformation extends Component {
  constructor(props) {
    super(props);
    this.personalDetailData = {
      Age: '24',
      Nationality: 'Citizen of United States',
      Address: '23 High Hope Blvd, Some City, Some Country',
      Phone: '+88 01911854378',
      Skype: 'sumon.backpiper',
      Email: 'backpiper.com@gmail.com',
      Website: 'www.topsmmpanel.com',
    };
    this.socialDetailData = {
      facebook: '#',
      twitter: '#',
      github: 'https://github.com/YanPanMichael',
      'google-plus': '#',
      linkedin: '#',
      pinterest: '#',
      skype: '#',
      flickr: '#',
      dribbble: '#',
      rss: '#',
    };
  }

  render() {
    /* eslint-disable global-require */
    const { personalDetailFlag } = this.props;
    return (
      <div className="left-part-container">
        <img className={`img-fluid personal-photo ${!personalDetailFlag ? 'fadeIn' : 'fadeOut'}`} src={require('../../../assets/img/personal/personal_main.JPG')} alt="" />
        <div className={`detail-absolute ${personalDetailFlag ? 'fadeIn' : 'fadeOut'}`}>
          <div className="person_information">
            <ul>
              {Object.keys(this.personalDetailData).map(elemKey => (
                <li key={elemKey}><a href="#">{elemKey}</a></li>
              ))}
            </ul>
            <ul>
              {Object.keys(this.personalDetailData).map(elemKey => (
                <li key={elemKey}><a href="#">{this.personalDetailData[elemKey]}</a></li>
              ))}
            </ul>
          </div>
          <ul className="social_icon">
            {Object.keys(this.socialDetailData).map(elemKey => (
              <li key={elemKey}><a href={this.socialDetailData[elemKey]} target="_blank"><i className={`fa fa-${elemKey} pf-icon`} /></a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

PersonalHomeaboutPersonInformation.propTypes = {
  personalDetailFlag: PropTypes.bool,
};

PersonalHomeaboutPersonInformation.defaultProps = {
  personalDetailFlag: false,
};

export default PersonalHomeaboutPersonInformation;
