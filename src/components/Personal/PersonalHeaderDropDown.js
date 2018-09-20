import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

class PersonalHeaderDropDown extends Component {

  render () {
    let {dropItemsMapArray} = this.props;
    return (
        <ul>
          {Object.keys(dropItemsMapArray).sort().map((elem, index) => {
            return <li key={index}><Link to={dropItemsMapArray[elem]}>{elem}</Link></li>
          })}
        </ul>
    )
  }
}

PersonalHeaderDropDown.propTypes = {

}

export default PersonalHeaderDropDown