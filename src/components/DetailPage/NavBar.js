import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="collapse navbar-collapse flex-column" id="navbar-collapse">
          <ul className="navbar-nav d-lg-block">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Overview
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="collapse"
                aria-expanded="false"
                data-target="#submenu-2"
                aria-controls="submenu-2"
              >
                Pages
              </a>
              <div id="submenu-2" className="collapse">
                <ul className="nav nav-small flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="pages-app.html">
                      App Pages
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="pages-utility.html">
                      Utility Pages
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="pages-layouts.html">
                      Layouts
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="collapse"
                aria-expanded="false"
                data-target="#submenu-3"
                aria-controls="submenu-3"
              >
                Components
              </a>
              <div id="submenu-3" className="collapse">
                <ul className="nav nav-small flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="components-bootstrap.html">
                      Bootstrap
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="components-pipeline.html">
                      Pipeline
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="documentation/index.html">
                Documentation
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="documentation/changelog.html">
                Changelog
              </a>
            </li>
          </ul>
          <hr />
          <div className="d-none d-lg-block w-100">
            <span className="text-small text-muted">Quick Links</span>
            <ul className="nav nav-small flex-column mt-2">
              <li className="nav-item">
                <a href="nav-side-team.html" className="nav-link">
                  Team Overview
                </a>
              </li>
              <li className="nav-item">
                <a href="nav-side-project.html" className="nav-link">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a href="nav-side-task.html" className="nav-link">
                  Single Task
                </a>
              </li>
              <li className="nav-item">
                <a href="nav-side-kanban-board.html" className="nav-link">
                  Kanban Board
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div>
            <form>
              <div className="input-group input-group-dark input-group-round">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="material-icons">search</i>
                  </span>
                </div>
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search"
                  aria-label="Search app"
                  aria-describedby="search-app"
                />
              </div>
            </form>
            <div className="dropdown mt-2">
              <button
                className="btn btn-primary btn-block dropdown-toggle"
                type="button"
                id="newContentButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Add New
              </button>
              <div className="dropdown-menu" aria-labelledby="newContentButton">
                <a className="dropdown-item" href="#">
                  Team
                </a>
                <a className="dropdown-item" href="#">
                  Project
                </a>
                <a className="dropdown-item" href="#">
                  Task
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
