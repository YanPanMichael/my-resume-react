import React, { Component } from 'react'
import Footer from './Footer'
import MainPage from './MainPage'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import NavBar from './NavBar'
import MainContainer from './MainContainer'

import '../css/App.css';

class App extends Component {
  render() {
    return (
      // <div className="layout layout-nav-side">
      <div>
        {/* <NavBar />
        <MainContainer /> */}
        <MainPage />
      </div>
    );
  }
}

export default App;
