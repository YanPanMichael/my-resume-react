import React, { Component } from 'react';

class PersonalFooter extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>About Me</h4>
                <p>
                We have tested a number of registry fix and clean utilities and present our top
                 3 list on our site for your convenience.
                </p>
                <p className="footer-text">
                  {'Copyright ' + new Date().getFullYear() + 'All rights reserved | This template is made with '}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4></h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h4>Follow Me</h4>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href={"mailto:panyancsu@163.com?subject=test&cc=yanpancsu@icloud.com&body=use mailto sample"+' Copyright ' + new Date().getFullYear()}><i className="fa fa-envelope"></i></a>
                  <a href="#"><i className="fa fa-qq" /></a>
                  <a href="#"><i className="fa fa-weixin" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="https://github.com/YanPanMichael" target="_blank"><i className="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default PersonalFooter;
