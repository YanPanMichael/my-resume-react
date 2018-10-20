import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div id="strage" className="main-page-root">
        <div className="k bqa bse backimgClass">
          <div className="e aij aey app-navbar">
            <nav className="du bqq azg qz">
              <a className="l aiy" href="">
                <strong>go</strong>
              </a>
              <button type="button" className="qv" data-target="#stage" data-toggle="stage" data-distance="-250">
                <span className="qw" />
              </button>
              <div className="d-none wx axv">
                <ul className="navbar-nav">
                  <li className="m ahq ">
                    <a className="qm" href="#">StartUp</a>
                  </li>
                  <li className="m ahq ">
                    <a className="qm" href="minimal/index.html">Minimal</a>
                  </li>
                  <li className="m ahq ">
                    <a className="qm" href="bold/index.html">Bold</a>
                  </li>
                  <li className="m ahq ">
                    <a className="qm" href="docs/index.html">Docs</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="bqg ait">
            <div className="e">
              <div className="c">
                <div className="fv gt">
                  <h1 className="bsf bsg">Analytics on demand.</h1>
                  <p className="al agw an">Stop installing bloated scripts that all track the exact same things. Install one that does everything.</p>
                  <button type="button" className="dm ox ap">Try it now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
