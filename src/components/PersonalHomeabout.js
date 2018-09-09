import React, { Component, PropTypes } from 'react'
import PersonalHomeaboutPersonInformation from './PersonalHomeaboutPersonInformation'

class PersonalContentHomeabout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personalDetailFlag: false
		}
		this.togglePersonalDetail = this.togglePersonalDetail.bind(this);
	}

	togglePersonalDetail() {
		this.setState(prevState => ({
			personalDetailFlag: !prevState.personalDetailFlag
		}));
	}

	render() {
		return (
			<section className="home-about-area pt-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 home-about-left">
							<PersonalHomeaboutPersonInformation personalDetailFlag = {this.state.personalDetailFlag} />
						</div>
						<div className="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 className="text-uppercase">Personal Details</h1>
							<p>
								Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
							<button className="primary-btn text-uppercase" onClick={this.togglePersonalDetail}>View Full Details</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

PersonalContentHomeabout.propTypes = {

}

export default PersonalContentHomeabout;
