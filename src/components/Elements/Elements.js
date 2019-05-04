import React, { Component } from 'react';
import Resizable from 're-resizable';

import LeftBarComponent from '../../common/LeftBarComponent';

class Elements extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.childRef.current);
  }

  render() {
    return (
      <div>
        <section className="relative about-banner" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">Elements</h1>
                <p className="text-white link-nav">
                  <a href="index.html">Home </a> <span className="lnr lnr-arrow-right" />{' '}
                  <a href="elements.html"> Elements</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <LeftBarComponent ref={this.childRef} />
        <section className="sample-text-area">
          <Resizable
            enable={{
              top: false,
              right: false,
              left: false,
              topRight: false,
              topLeft: false,
              bottomRight: false,
              bottomLeft: false,
              bottom: true
            }}
          >
            <div className="container">
              <h3 className="text-heading">Text Sample</h3>
              <p className="sample-text">
                Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i>{' '}
                interest documentary, or short film to show off their creative prowess. Many have
                great ideas and want to “wow” the
                <sup>Superscript</sup> scene, or video renters with their big project. But once you
                have the
                <sub>Subscript</sub> “in the can” (no easy feat), how do you move from a{' '}
                <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked
                hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of
                shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your
                doorstep? You need to create eye-popping artwork and have your project replicated.
                Using a reputable full service DVD Replication company like PacificDisc, Inc. to
                partner with is certainly a helpful option to ensure a professional end result, but
                to help with your DVD replication project, here are 4 easy steps to follow for good
                DVD replication results:
              </p>
            </div>
          </Resizable>
        </section>
        <section className="button-area">
          <div className="container border-top-generic">
            <h3 className="text-heading">Sample Buttons</h3>
            <div className="button-group-area">
              <a href="#" className="genric-btn default">
                Default
              </a>
              <a href="#" className="genric-btn primary">
                Primary
              </a>
              <a href="#" className="genric-btn success">
                Success
              </a>
              <a href="#" className="genric-btn info">
                Info
              </a>
              <a href="#" className="genric-btn warning">
                Warning
              </a>
              <a href="#" className="genric-btn danger">
                Danger
              </a>
              <a href="#" className="genric-btn link">
                Link
              </a>
              <a href="#" className="genric-btn disable">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-10">
              <a href="#" className="genric-btn default-border">
                Default
              </a>
              <a href="#" className="genric-btn primary-border">
                Primary
              </a>
              <a href="#" className="genric-btn success-border">
                Success
              </a>
              <a href="#" className="genric-btn info-border">
                Info
              </a>
              <a href="#" className="genric-btn warning-border">
                Warning
              </a>
              <a href="#" className="genric-btn danger-border">
                Danger
              </a>
              <a href="#" className="genric-btn link-border">
                Link
              </a>
              <a href="#" className="genric-btn disable">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-40">
              <a href="#" className="genric-btn default radius">
                Default
              </a>
              <a href="#" className="genric-btn primary radius">
                Primary
              </a>
              <a href="#" className="genric-btn success radius">
                Success
              </a>
              <a href="#" className="genric-btn info radius">
                Info
              </a>
              <a href="#" className="genric-btn warning radius">
                Warning
              </a>
              <a href="#" className="genric-btn danger radius">
                Danger
              </a>
              <a href="#" className="genric-btn link radius">
                Link
              </a>
              <a href="#" className="genric-btn disable radius">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-10">
              <a href="#" className="genric-btn default-border radius">
                Default
              </a>
              <a href="#" className="genric-btn primary-border radius">
                Primary
              </a>
              <a href="#" className="genric-btn success-border radius">
                Success
              </a>
              <a href="#" className="genric-btn info-border radius">
                Info
              </a>
              <a href="#" className="genric-btn warning-border radius">
                Warning
              </a>
              <a href="#" className="genric-btn danger-border radius">
                Danger
              </a>
              <a href="#" className="genric-btn link-border radius">
                Link
              </a>
              <a href="#" className="genric-btn disable radius">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-40">
              <a href="#" className="genric-btn default circle">
                Default
              </a>
              <a href="#" className="genric-btn primary circle">
                Primary
              </a>
              <a href="#" className="genric-btn success circle">
                Success
              </a>
              <a href="#" className="genric-btn info circle">
                Info
              </a>
              <a href="#" className="genric-btn warning circle">
                Warning
              </a>
              <a href="#" className="genric-btn danger circle">
                Danger
              </a>
              <a href="#" className="genric-btn link circle">
                Link
              </a>
              <a href="#" className="genric-btn disable circle">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-10">
              <a href="#" className="genric-btn default-border circle">
                Default
              </a>
              <a href="#" className="genric-btn primary-border circle">
                Primary
              </a>
              <a href="#" className="genric-btn success-border circle">
                Success
              </a>
              <a href="#" className="genric-btn info-border circle">
                Info
              </a>
              <a href="#" className="genric-btn warning-border circle">
                Warning
              </a>
              <a href="#" className="genric-btn danger-border circle">
                Danger
              </a>
              <a href="#" className="genric-btn link-border circle">
                Link
              </a>
              <a href="#" className="genric-btn disable circle">
                Disable
              </a>
            </div>
            <div className="button-group-area mt-40">
              <a href="#" className="genric-btn default circle arrow">
                Default
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn primary circle arrow">
                Primary
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn success circle arrow">
                Success
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn info circle arrow">
                Info
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn warning circle arrow">
                Warning
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn danger circle arrow">
                Danger
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
            <div className="button-group-area mt-10">
              <a href="#" className="genric-btn default-border circle arrow">
                Default
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn primary-border circle arrow">
                Primary
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn success-border circle arrow">
                Success
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn info-border circle arrow">
                Info
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn warning-border circle arrow">
                Warning
                <span className="lnr lnr-arrow-right" />
              </a>
              <a href="#" className="genric-btn danger-border circle arrow">
                Danger
                <span className="lnr lnr-arrow-right" />
              </a>
            </div>
            <div className="button-group-area mt-40">
              <a href="#" className="genric-btn primary e-large">
                Extra Large
              </a>
              <a href="#" className="genric-btn success large">
                Large
              </a>
              <a href="#" className="genric-btn primary">
                Default
              </a>
              <a href="#" className="genric-btn success medium">
                Medium
              </a>
              <a href="#" className="genric-btn primary small">
                Small
              </a>
            </div>
            <div className="button-group-area mt-10">
              <a href="#" className="genric-btn primary-border e-large">
                Extra Large
              </a>
              <a href="#" className="genric-btn success-border large">
                Large
              </a>
              <a href="#" className="genric-btn primary-border">
                Default
              </a>
              <a href="#" className="genric-btn success-border medium">
                Medium
              </a>
              <a href="#" className="genric-btn primary-border small">
                Small
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Elements;
