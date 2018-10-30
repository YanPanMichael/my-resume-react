import React, { Component } from 'react';
import PersonalHomeaboutPersonInformation from './PersonalHomeaboutPersonInformation';

class PersonalContentHomeabout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetailFlag: false,
    };
    this.togglePersonalDetail = this.togglePersonalDetail.bind(this);
  }

  togglePersonalDetail() {
    this.setState(prevState => ({
      personalDetailFlag: !prevState.personalDetailFlag,
    }));
  }

  render() {
    const { personalDetailFlag } = this.state;
    return (
      <section className="home-about-area pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 home-about-left">
              <PersonalHomeaboutPersonInformation personalDetailFlag={personalDetailFlag} />
            </div>
            <div className="col-lg-5 col-md-6 home-about-right">
              <h6>About Me</h6>
              <h1 className="text-uppercase">Personal Details</h1>
              <p>
                Here, I focus on a range of items and features that I introduce myself in life
                without giving them a second thought.
                I am graduated from CSU in 2016 and my major is CS,
                I am good at UI developing as well as making research on ML.
                My deliver and achievements are show in my resume.
              </p>
              <button type="button" className="primary-btn text-uppercase" style={{ borderRadius: 8 }} onClick={this.togglePersonalDetail}>View Full Details</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PersonalContentHomeabout;
