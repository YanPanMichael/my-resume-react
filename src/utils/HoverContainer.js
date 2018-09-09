import React, { Component } from 'react';

class HoverContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState({
      isHovering: !state.isHovering
    });
  }

  render() {
    const {InputComponent} = this.props;
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
          Hover Me
        </div>
        {this.state.isHovering &&
          <div>
            Hovering right meow! 🐱
          </div>
        }
      </div>
    );
  }
}

export default HoverContainer;