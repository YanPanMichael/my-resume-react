import React, { Component, PropTypes } from 'react'

class PersonalHeaderDropDown extends Component {

  render () {
    let {dropItemsMapArray} = this.props;
    return (
        <ul>
          {Object.keys(dropItemsMapArray).sort().map((elem, index) => {
            return <li key={index}><a href={dropItemsMapArray[elem]}>{elem}</a></li>
          })}
        </ul>
    )
  }
}

PersonalHeaderDropDown.propTypes = {

}

export default PersonalHeaderDropDown