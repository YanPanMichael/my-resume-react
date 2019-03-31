import React, { Component } from 'react';
import PropTypes from 'prop-types';

const createComponentsFactory = WrappedComponent => 
  class extends Component {
    static propTypes = {
      name: PropTypes.string
    };

    static defaultProps = {
      name: ''
    }

    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
    }

    render() {
      const { name } = this.state;
      return <WrappedComponent {...this.props} name={name} />;
    }
  };

export default createComponentsFactory;
