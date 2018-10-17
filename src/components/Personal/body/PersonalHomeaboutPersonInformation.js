import React, { Component, PropTypes } from 'react'
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PersonalHomeaboutPersonInformation extends Component {
  constructor(props) {
    super(props);
    this.personalDetailData = {
      'Age' : '24',
      'Nationality' : 'Citizen of United States', 
      'Address' : '23 High Hope Blvd, Some City, Some Country', 
      'Phone' : '+88 01911854378', 
      'Skype' : 'sumon.backpiper', 
      'Email' : 'backpiper.com@gmail.com', 
      'Website' : 'www.topsmmpanel.com',
    }
    this.socialDetailData = {
      'facebook' : '#',
      'twitter' : '#',
      'github' : 'https://github.com/YanPanMichael',
      'google-plus' : '#',
      'linkedin' : '#',
      'pinterest' : '#',
      'skype' : '#',
      'flickr' : '#',
      'dribbble' : '#',
      'rss' : '#',
    }
  }

  renderDifferentPart() {
    return <div className="left-part-container">
      <img className={`img-fluid ${!this.props.personalDetailFlag?'fadeIn':'fadeOut'}`} src={require('../../../assets/img/personal/about-img.png')} alt="" />
      <div className={`detail-absolute ${this.props.personalDetailFlag?'fadeIn':'fadeOut'}`}>
        <div className={'person_information'}>
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
        <ul className={'social_icon'}>
          {Object.keys(this.socialDetailData).map(elemKey => (
            <li key={elemKey}><a href={this.socialDetailData[elemKey]} target="_blank"><i className={`fa fa-${elemKey}`}></i></a></li>
          ))}
        </ul>
      </div>
    </div>
  }

  render () {
    return (
      <div>
        {this.renderDifferentPart()}
      </div>
    )
  }
}

PersonalHomeaboutPersonInformation.propTypes = {

}

export default PersonalHomeaboutPersonInformation;
