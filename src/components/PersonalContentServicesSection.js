import React, { Component, PropTypes } from 'react'
import CountUp from 'react-countup';

class PersonalContentServicesSection extends Component {
  constructor(props) {
    super(props);
    this.countUpData={'Projects Completed':2536, 'Happy Clients':6784, 'Cups of Coffee':2239, 'Real Professionals':435};
  }
  render() {
    return (
      <div>
        <section className="services-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">My Offered Services</h1>
                  <p>At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-pie-chart"></span>
                  <a href="#"><h4>Web Design</h4></a>
                  <p>
                    “It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-laptop-phone"></span>
                  <a href="#"><h4>Web Development</h4></a>
                  <p>
                    If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-camera"></span>
                  <a href="#"><h4>Photography</h4></a>
                  <p>
                    Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-picture"></span>
                  <a href="#"><h4>Clipping Path</h4></a>
                  <p>
                    Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-tablet"></span>
                  <a href="#"><h4>Apps Interface</h4></a>
                  <p>
                    Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.
								</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-rocket"></span>
                  <a href="#"><h4>Graphic Design</h4></a>
                  <p>
                    You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.
								</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="facts-area section-gap" id="facts-area">
          <div className="container">
            <div className="row">
              {Object.keys(this.countUpData).map(elemkey => (
                <div className="col-lg-3 col-md-6 single-fact" key={elemkey}>
                  <h1>
                    <CountUp
                      className="counter"
                      start={0}
                      end={this.countUpData[elemkey]}
                      duration={5.75}
                      separator=""
                      decimals={0}
                      delay={10}
                      decimal=""
                      prefix=""
                      suffix=""
                      // onEnd={() => console.log('Ended! 👏')}
                      // onStart={() => console.log('Started! 💨')}
                    />
                  </h1>
                  <p>{elemkey}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-area section-gap" id="portfolio">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Our Latest Featured Projects</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>

            <div className="filters">
              <ul>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".vector">Vector</li>
                <li data-filter=".raster">Raster</li>
                <li data-filter=".ui">UI/UX</li>
                <li data-filter=".printing">Printing</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p1.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p1.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p2.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p2.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all ui">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p3.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p3.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>

                  </div>
                  <div className="p-inner">
                    <h4>Creative Poster Design</h4>
                    <div className="cat">Agency</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all printing">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p4.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p4.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Embosed Logo Design</h4>
                    <div className="cat">Portal</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p5.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p5.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>3D Helmet Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg"></div>
                      <img className="image img-fluid" src={require('../assets/img/personal/p6.jpg')} alt="" />
                    </div>
                    <a href="../assets/img/personal/p6.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex"><img src={require('../assets/img/personal/preview.png')} alt="" /></div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">raster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

PersonalContentServicesSection.propTypes = {

}

export default PersonalContentServicesSection;

// var options = {
//     useEasing: true, 
//     useGrouping: true, 
//     separator: ',', 
//     decimal: '.', 
//   };
//   var demo = new CountUp('myTargetElement', 0, 4845, 3, 22.8, options);
//   if (!demo.error) {
//     demo.start();
//   } else {
//     console.error(demo.error);
//   }

// if(document.getElementById("facts-area")){
//   $('.counter').counterUp({
//       delay: 10,
//       time: 1000
//   });
// }