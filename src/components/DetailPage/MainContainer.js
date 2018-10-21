import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-9">
              <section className="py-4 py-lg-5">
                <div className="mb-3 d-flex">
                  <img
                    alt="Pipeline"
                    src="assets/img/logo-color.svg"
                    className="avatar avatar-lg mr-1"
                  />
                  <div>
                    <span className="badge badge-success">1.0.1</span>
                  </div>
                </div>
                <h1 className="display-4 mb-3">A project management template for Bootstrap 4</h1>
                <p className="lead">
                  Pipeline is a collection of modular components and layouts for building project
                  management and collaboration web apps.
                </p>
                <div className="d-flex">
                  <div className="dropdown mr-3">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                      Explore Pages
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="pages-app.html">
                        App Pages
                      </a>
                      <a className="dropdown-item" href="pages-utility.html">
                        Utility Pages
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                      View Components
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="components-bootstrap.html">
                        Bootstrap Components
                      </a>
                      <a className="dropdown-item" href="components-pipeline.html">
                        Pipeline Components
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
