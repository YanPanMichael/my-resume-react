import React, { Component, PropTypes } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div class="collapse navbar-collapse flex-column" id="navbar-collapse">
          <ul class="navbar-nav d-lg-block">

            <li class="nav-item">

              <a class="nav-link" href="index.html">Overview</a>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">Pages</a>
              <div id="submenu-2" class="collapse">
                <ul class="nav nav-small flex-column">

                  <li class="nav-item">
                    <a class="nav-link" href="pages-app.html">App Pages</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="pages-utility.html">Utility Pages</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="pages-layouts.html">Layouts</a>
                  </li>

                </ul>
              </div>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">Components</a>
              <div id="submenu-3" class="collapse">
                <ul class="nav nav-small flex-column">

                  <li class="nav-item">
                    <a class="nav-link" href="components-bootstrap.html">Bootstrap</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="components-pipeline.html">Pipeline</a>
                  </li>

                </ul>
              </div>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="documentation/index.html">Documentation</a>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="documentation/changelog.html">Changelog</a>

            </li>

          </ul>
          <hr />
          <div class="d-none d-lg-block w-100">
            <span class="text-small text-muted">Quick Links</span>
            <ul class="nav nav-small flex-column mt-2">
              <li class="nav-item">
                <a href="nav-side-team.html" class="nav-link">Team Overview</a>
              </li>
              <li class="nav-item">
                <a href="nav-side-project.html" class="nav-link">Project</a>
              </li>
              <li class="nav-item">
                <a href="nav-side-task.html" class="nav-link">Single Task</a>
              </li>
              <li class="nav-item">
                <a href="nav-side-kanban-board.html" class="nav-link">Kanban Board</a>
              </li>
            </ul>
            <hr />
          </div>
          <div>
            <form>
              <div class="input-group input-group-dark input-group-round">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">search</i>
                  </span>
                </div>
                <input type="search" class="form-control form-control-dark" placeholder="Search" aria-label="Search app" aria-describedby="search-app" />
              </div>
            </form>
            <div class="dropdown mt-2">
              <button class="btn btn-primary btn-block dropdown-toggle" type="button" id="newContentButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Add New
                            </button>
              <div class="dropdown-menu" aria-labelledby="newContentButton">
                <a class="dropdown-item" href="#">Team</a>
                <a class="dropdown-item" href="#">Project</a>
                <a class="dropdown-item" href="#">Task</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NavBar.propTypes = {

}

export default NavBar