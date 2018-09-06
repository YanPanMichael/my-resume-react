import React, { Component, PropTypes } from 'react'
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
import PersonalHomeaboutPersonInformation from './PersonalHomeaboutPersonInformation'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
		// const result = this.state.personalDetailFlag ? <img className="img-fluid" src={require('../assets/img/personal/about-img.png')} alt="" /> : <PersonalHomeaboutPersonInformation detailFlag = {this.state.personalDetailFlag} />
		return (
			<section className="home-about-area pt-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 home-about-left">
							{/* <ReactCSSTransitionGroup
								transitionEnterTimeout={1000}
								transitionLeaveTimeout={1000}
								transitionName="slide">
									<div className="fadeOut" key={this.state.personalDetailFlag}>
										{<PersonalHomeaboutPersonInformation detailFlag = {this.state.personalDetailFlag} />}
									</div>
							</ReactCSSTransitionGroup> */}
							<img className={`img-fluid spin-in ${this.state.personalDetailFlag?'show2':''}`} src={require('../assets/img/personal/about-img.png')} alt="" />
							<PersonalHomeaboutPersonInformation detailFlag = {this.state.personalDetailFlag} />
						</div>

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

export default PersonalContentHomeabout;