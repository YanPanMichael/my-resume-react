import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import 'idempotent-babel-polyfill';

import CanvasNest from 'canvas-nest.js';
import Personal from './Personal/Personal';
import PersonalHeaderContainer from '../containers/PersonalHeaderContainer';

import Elements from './Elements/Elements';
import ResumePDF from './PDF/ResumePDF';
import TodoListPage from './TodoList';
import About from './About/About';

import '../css/App.css';
import '../css/linearicons.css';
import '../css/font-awesome.min.css';
import '../css/bootstrap.css';
import '../css/magnific-popup.css';
import '../css/nice-select.css';
import '../css/animate.min.css';
import '../css/owl.carousel.css';
import '../css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.config = {
      color: '172, 214, 255',
      count: 88
    };
  }

  componentWillMount() {
    // Using config rendering effect at 'element'.
    this.cn = new CanvasNest(document.getElementById('root'), this.config);
  }

  componentWillUnmount() {
    // destroy
    this.cn.destroy();
  }

  render() {
    return (
      <React.Fragment>
        <PersonalHeaderContainer />
        <main>
          <Switch>
            <Route path="/" exact component={Personal} />
            <Route path="/my-resume" component={Personal} />
            <Route path="/resume-pdf" component={ResumePDF} />
            <Route path="/elements" component={Elements} />
            <Route path="/todo-page" component={TodoListPage} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
