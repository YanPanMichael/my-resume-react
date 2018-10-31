import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AboutBody extends Component {
  render() {
    return (
      <div>
        <section className="about-banner">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">About Me</h1>
                <p className="text-white link-nav">
                  <a href="index.html">Home </a> <span className="lnr lnr-arrow-right" />{' '}
                  <a href="about.html"> About Me</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-about-area section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-6 home-about-left">
                <img className="img-fluid" src="img/about-img.png" alt="" />
              </div>
              <div className="col-lg-5 col-md-6 home-about-right">
                <h6>About Me</h6>
                <h1 className="text-uppercase">Personal Details</h1>
                <p>
                  Here, I focus on a range of items and features that we use in life without giving
                  them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                  View Full Details
                </a>
              </div>
              <div className="col-lg-12 pt-60">
                <p>
                  It won’t be a bigger problem to find one video game lover in your neighbor. Since
                  the introduction of Virtual Game, it has been achieving great heights so far as
                  its popularity and technological advancement are concerned. The history of video
                  game is as interesting as a fairy tale.
                </p>
                <p>
                  The quality of today’s video game was not at all there when video game first
                  conceptualized and played ever. During the formulative years, video games were
                  created by using various interactive electronic devices with various display
                  formats. The first ever video game was designed in 1947 by Thomas T. Goldsmith Jr.
                </p>
                <h4 className="pt-30">Tools Expertness</h4>
              </div>
            </div>
            <div className="row skillbar-wraps">
              <div className="col-lg-6 skill-left">
                <div className="single-skill">
                  <p>After Effects 85%</p>
                  <div className="skill" data-width="85" />
                </div>
                <div className="single-skill">
                  <p>Photoshop 90%</p>
                  <div className="skill" data-width="90" />
                </div>
                <div className="single-skill">
                  <p>Illustrator 70%</p>
                  <div className="skill" data-width="70" />
                </div>
              </div>
              <div className="col-lg-6 skill-right">
                <div className="single-skill">
                  <p>Sublime 95%</p>
                  <div className="skill" data-width="95" />
                </div>
                <div className="single-skill">
                  <p>Sketch 85%</p>
                  <div className="skill" data-width="85" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline pb-120">
          <div className="text-center">
            <div className="menu-content pb-70">
              <div className="title text-center">
                <h1 className="mb-10">My Qualifications</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <div className="content">
                <h4>
                  <time>Masters in Graphics & Fine Arts</time>
                </h4>
                <p>
                  <b>Session:</b> 2010-11
                </p>
                <p>
                  <b>Result:</b> 3.78 (In the Scale of 4.00)
                </p>
              </div>
            </li>
            <li>
              <div className="content">
                <img
                  className="img-fluid mx-auto d-block mb-30"
                  src="img/about/c-logo.png"
                  alt=""
                />
                <h4>
                  <time>Creative Content Developer</time>
                </h4>
                <p>July 2015 to Present</p>
              </div>
            </li>
            <li>
              <div className="content">
                <h4>
                  <time>Bachelor in Graphics & UI/UX</time>
                </h4>
                <p>
                  <b>Session:</b> 2006-09
                </p>
                <p>
                  <b>Result:</b> 3.40 (In the Scale of 4.00)
                </p>
              </div>
            </li>
            <li>
              <div className="content">
                <img
                  className="img-fluid mx-auto d-block mb-30"
                  src="img/about/c-logo.png"
                  alt=""
                />
                <h4>
                  <time>Senior UI/UX Designer</time>
                </h4>
                <p>July 2015 to Present</p>
              </div>
            </li>
            <li>
              <div className="content">
                <h4>
                  <time>Diploma in Fine Arts & Printing</time>
                </h4>
                <p>
                  <b>Session:</b> 2003-06
                </p>
                <p>
                  <b>Result:</b> 4.94 (In the Scale of 5.00)
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonial-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Client’s Feedback About Me</h1>
                  <p>
                    It is very easy to start smoking but it is an uphill task to quit it. Ask any
                    chain smoker or even a person.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-testimonial">
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/elements/user1.png" alt="" />
                  </div>
                  <div className="desc">
                    <p>
                      Do you want to be even more successful? Learn to love learning and growth. The
                      more effort you put into improving your skills, the bigger the payoff you.
                    </p>
                    <h4>Harriet Maxwell</h4>
                    <p>CEO at Google</p>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src="img/elements/user2.png" alt="" />
                  </div>
                  <div className="desc">
                    <p>
                      A purpose is the eternal condition for success. Every former smoker can tell
                      you just how hard it is to stop smoking cigarettes. However.
                    </p>
                    <h4>Carolyn Craig</h4>
                    <p>CEO at Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brands-area">
          <div className="container">
            <div className="brand-wrap">
              <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l1.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l2.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l3.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l4.png" alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src="img/l5.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

AboutBody.propTypes = {};

export default AboutBody;
