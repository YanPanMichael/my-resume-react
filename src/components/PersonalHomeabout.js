import React, { Component, PropTypes } from 'react'

class PersonalContentHomeabout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personalDetailFlag: false
		}
		this.togglePersonalDetail = this.togglePersonalDetail.bind(this);
	}

	togglePersonalDetail() {
		this.setState({
			personalDetailFlag: !this.state.personalDetailFlag
		})
	}

	render() {
		return (
			<section className="home-about-area pt-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						{!this.state.personalDetailFlag && <div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid" src={require('../assets/img/personal/about-img.png')} alt="" />
						</div>}
						{this.state.personalDetailFlag && <div className="col-lg-6 col-md-6 home-about-left">
							<div class="person_information">
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
						</div>}
						<div className="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 className="text-uppercase">Personal Details</h1>
							<p>
								Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
							<a href="#" className="primary-btn text-uppercase" onClick={this.togglePersonalDetail}>View Full Details</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

PersonalContentHomeabout.propTypes = {

}

export default PersonalContentHomeabout