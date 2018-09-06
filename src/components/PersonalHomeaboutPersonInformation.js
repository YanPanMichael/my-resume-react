import React, { Component, PropTypes } from 'react'

class PersonalHomeaboutPersonInformation extends Component {
  render () {
    return (
      <div>
        <div className="person_information">
          <ul>
            <li><a href="#">Age</a></li>
            <li><a href="#">Nationality</a></li>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Skype</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Website</a></li>
          </ul>
          <ul>
            <li><a href="#">24</a></li>
            <li><a href="#">Citizen of United States</a></li>
            <li><a href="#">23 High Hope Blvd, Some City, Some Country</a></li>
            <li><a href="#">+88 01911854378</a></li>
            <li><a href="#">sumon.backpiper</a></li>
            <li><a href="#">backpiper.com@gmail.com</a></li>
            <li><a href="www.topsmmpanel.com">www.topsmmpanel.com</a></li>
          </ul>
        </div>
        <ul class="social_icon">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
          <li><a href="#"><i class="fa fa-skype"></i></a></li>
          <li><a href="#"><i class="fa fa-flickr"></i></a></li>
          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          <li><a href="#"><i class="fa fa-rss"></i></a></li>
        </ul>
      </div>
    )
  }
}

PersonalHomeaboutPersonInformation.propTypes = {

}

export default PersonalHomeaboutPersonInformation