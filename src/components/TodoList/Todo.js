import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const { onClickFunction, completed, text } = this.props;
    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        <div onClick={onClickFunction} onKeyUp={this.toggleSecondNavBar}>
          {text}
        </div>
      </li>
    );
  }
}

Todo.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
