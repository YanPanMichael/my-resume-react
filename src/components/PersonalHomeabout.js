import React, { Component, PropTypes } from 'react'

class PersonalHomeabout extends Component {
	render() {
		return (
			<section className="home-about-area pt-120">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 col-md-6 home-about-left">
							<img className="img-fluid" src={require('../assets/img/personal/about-img.png')} alt="" />
						</div>
						<div className="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 className="text-uppercase">Personal Details</h1>
							<p>
								Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
							<a href="#" className="primary-btn text-uppercase">View Full Details</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

PersonalHomeabout.propTypes = {

}

export default PersonalHomeabout