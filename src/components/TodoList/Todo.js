import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        <div onClick={onClick} onKeyUp={onClick}>
          {text}
        </div>
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
