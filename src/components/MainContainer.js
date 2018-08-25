import React, { Component, PropTypes } from 'react'

class MainContainer extends Component {
  render() {
    return (
      <div class="main-container">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11 col-xl-9">
            <section class="py-4 py-lg-5">
                                <div class="mb-3 d-flex">
                                    <img alt="Pipeline" src="assets/img/logo-color.svg" class="avatar avatar-lg mr-1" />
                                    <div>
                                        <span class="badge badge-success">1.0.1</span>
                                    </div>
                                </div>
                                <h1 class="display-4 mb-3">A project management template for Bootstrap 4</h1>
                                <p class="lead">
                                    Pipeline is a collection of modular components and layouts for building project management and collaboration web apps.
                                </p>
                                <div class="d-flex">
                                    <div class="dropdown mr-3">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Explore Pages</a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="pages-app.html">App Pages</a>
                                            <a class="dropdown-item" href="pages-utility.html">Utility Pages</a>
                                        </div>
                                    </div>
                                    <div class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">View Components</a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="components-bootstrap.html">Bootstrap Components</a>
                                            <a class="dropdown-item" href="components-pipeline.html">Pipeline Components</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {

}

export default MainContainer