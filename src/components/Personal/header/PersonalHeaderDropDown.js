import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PersonalHeaderDropDown extends Component {
  render() {
    const { dropItemsMapArray } = this.props;
    return (
      <ul>
        {Object.keys(dropItemsMapArray).sort().map(
          elem => <li key={elem}><Link to={dropItemsMapArray[elem]}>{elem}</Link></li>,
        )}
      </ul>
    );
  }
}

PersonalHeaderDropDown.propTypes = {
  dropItemsMapArray: PropTypes.object,
};

PersonalHeaderDropDown.defaultProps = {
  dropItemsMapArray: [],
};

export default PersonalHeaderDropDown;
