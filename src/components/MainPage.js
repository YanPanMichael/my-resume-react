import React, { Component, PropTypes } from 'react'

class MainPage extends Component {
  render() {
    return (
      <div id="strage" className="brz">
      <div className="k am bqa bse backimgClass">
        <div className="e aij aey app-navbar">
          <nav className="du bqq azg qz">
            <a className="l aiy" href="">
              <strong>go</strong>
            </a>
            <button className="qv" data-target="#stage" data-toggle="stage" data-distance="-250">
              <span className="qw"></span>
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

        <img className="main-page-bg-index" src={require('../assets/img/startup-0.svg')} alt=""/>

        <div className="bqg ait">
          <div className="e">
            <div className="c">
              <div className="fv gt">
                <h1 className="bsf bsg">Analytics on demand.</h1>
                <p className="al agw an">Stop installing bloated scripts that all track the exact same things. Install one that does everything.</p>
                <button className="dm ox ap">Try it now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

MainPage.propTypes = { }

export default MainPage